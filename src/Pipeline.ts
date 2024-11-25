import { PipelineError } from './PipelineError'
import { MetaPipe, MixedPipe, Passable, Pipe, PipeArguments, PipeExecutor, PipelineOptions, PipeResolver, ReducerCallback } from './definitions'

/**
 * Class representing a Pipeline.
 *
 * @template T - The type of the passable object in the pipeline.
 * @template R - The type of the return value from the pipeline execution.
 *
 * This class is responsible for managing and executing a series of operations
 * on a set of passable values through multiple configurable pipes.
 */
export class Pipeline<T extends Passable, R extends Passable | T = T> {
  /** The passable objects sent through the pipeline */
  private passable: T[]

  /** The method name to call on each pipe */
  private method: string

  /** Flag indicating whether the pipeline should run synchronously or asynchronously */
  private isSync: boolean

  /** The sorted pipes that will be executed */
  private sortedPipes: Pipe[]

  /** The metadata associated with each pipe */
  private metaPipes: MetaPipe[]

  /** The default priority for the pipes in the pipeline */
  private _defaultPriority: number

  /** The resolver function used to resolve pipes before they are executed in the pipeline. */
  private readonly resolver?: PipeResolver<T, R>

  /**
   * Create a pipeline instance.
   *
   * @param options - Optional Pipeline options.
   * @returns The pipeline instance.
   */
  static create<T extends Passable, R extends Passable | T = T> (options?: PipelineOptions<T, R>): Pipeline<T, R> {
    return new this(options)
  }

  /**
   * Initialize a new Pipeline instance.
   *
   * @param options - Optional Pipeline options.
   */
  protected constructor (options?: PipelineOptions<T, R>) {
    this.passable = []
    this.isSync = false
    this.metaPipes = []
    this.sortedPipes = []
    this.method = 'handle'
    this._defaultPriority = 10
    this.resolver = options?.resolver
  }

  /**
   * Set the default priority for pipes in the pipeline.
   *
   * @param value - The priority value to set.
   * @returns The current Pipeline instance.
   */
  defaultPriority (value: number): this {
    this._defaultPriority = value
    return this
  }

  /**
   * Set the passable objects being sent through the pipeline.
   *
   * @param passable - The objects to pass through the pipeline.
   * @returns The current Pipeline instance.
   */
  send (...passable: T[]): this {
    this.passable = passable
    return this
  }

  /**
   * Set the pipes for the pipeline.
   *
   * @param pipes - Array of pipes or MetaPipe instances.
   * @returns The current Pipeline instance.
   */
  through (pipes: MixedPipe[]): this {
    this.metaPipes = pipes.map(pipe => (Object.prototype.hasOwnProperty.call(pipe, 'pipe') ? pipe : { pipe, priority: this._defaultPriority }) as MetaPipe)
    this.sortedPipes = this.metaPipes
      .sort((a, b) => a.priority !== undefined && b.priority !== undefined ? a.priority - b.priority : 0)
      .map(v => v.pipe)
      .reverse()
    return this
  }

  /**
   * Add additional pipes to the pipeline.
   *
   * @param pipe - A single pipe or an array of pipes.
   * @returns The current Pipeline instance.
   */
  pipe (pipe: MixedPipe | MixedPipe[]): this {
    return this.through((this.metaPipes as MixedPipe[]).concat(pipe))
  }

  /**
   * Set the method to call on each pipe.
   *
   * @param method - The method name to use on each pipe.
   * @returns The current Pipeline instance.
   */
  via (method: string): this {
    this.method = method
    return this
  }

  /**
   * Configure the pipeline to run synchronously or asynchronously.
   *
   * @param value - Set true for sync, false for async (default is true).
   * @returns The current Pipeline instance.
   */
  sync (value: boolean = true): this {
    this.isSync = value
    return this
  }

  /**
   * Run the pipeline with a final destination callback.
   *
   * @param destination - The final function to execute.
   * @returns The result of the pipeline, either synchronously or as a Promise.
   */
  then (destination: PipeExecutor<T, R>): R | Promise<R> {
    return this
      .sortedPipes
      .reduce<PipeExecutor<T, R>>(
      this.isSync ? this.reducer() : this.asyncReducer(),
      destination.bind(destination)
    )(...this.passable)
  }

  /**
   * Run the pipeline and return the result.
   *
   * @returns The result of the pipeline, either synchronously or as a Promise.
   */
  thenReturn (): R | Promise<R> {
    return this.then((passable) => passable as R)
  }

  /**
   * Get the asynchronous reducer to iterate over the pipes.
   *
   * @returns The asynchronous reducer callback.
   */
  private asyncReducer (): ReducerCallback<T, R> {
    return (previousPipeExecutor: PipeExecutor<T, R>, currentPipe: Pipe): PipeExecutor<T, R> => {
      return async (...passable: T[]): Promise<R> => {
        return this.executePipe(currentPipe, this.makeArgs(passable, previousPipeExecutor, currentPipe))
      }
    }
  }

  /**
   * Get the synchronous reducer to iterate over the pipes.
   *
   * @returns The synchronous reducer callback.
   */
  private reducer (): ReducerCallback<T, R> {
    return (previousPipeExecutor: PipeExecutor<T, R>, currentPipe: Pipe): PipeExecutor<T, R> => {
      return (...passable: T[]): R => {
        return this.executePipe(currentPipe, this.makeArgs(passable, previousPipeExecutor, currentPipe))
      }
    }
  }

  /**
   * Resolve and execute a pipe.
   *
   * @param currentPipe - The current pipe to execute (class or service alias string).
   * @param args - The arguments for the pipe.
   * @returns The result of the pipe execution.
   * @throws PipelineError If the pipe cannot be resolved or the method is missing.
   */
  private executePipe (currentPipe: Pipe, args: PipeArguments<T, R>): R {
    let instance = (typeof this.resolver === 'function') ? this.resolver(currentPipe) : undefined

    if (instance === undefined) {
      if (typeof currentPipe === 'function') {
        instance = this.createInstanceFromPipe(currentPipe)
      }

      if (instance === undefined) {
        throw new PipelineError(`Cannot resolve this pipe ${String(currentPipe)}.`)
      }
    }

    this.validatePipeMethod(instance, currentPipe)

    return instance[this.method].apply(instance, args)
  }

  /**
   * Create an instance from the provided pipe.
   *
   * @param currentPipe - The pipe function to create an instance from.
   * @returns The created instance or an object with the method.
   */
  private createInstanceFromPipe (currentPipe: Function): any {
    return Object.prototype.hasOwnProperty.call(currentPipe, 'prototype')
      ? new currentPipe.prototype.constructor()
      : { [this.method]: currentPipe }
  }

  /**
   * Validate that the required method exists on the instance.
   *
   * @param instance - The instance to validate.
   * @param currentPipe - The current pipe being executed.
   * @throws {PipelineError} If the method does not exist on the instance.
   */
  private validatePipeMethod (instance: any, currentPipe: Pipe): void {
    if (typeof instance[this.method] !== 'function') {
      throw new PipelineError(
        `No method with this name(${this.method}) exists in this constructor(${currentPipe.constructor.name})`
      )
    }
  }

  /**
   * Create arguments for the current pipe.
   *
   * @param passable - The passable objects.
   * @param previousPipeExecutor - The previous executor in the pipeline.
   * @param currentPipe - The current pipe being executed.
   * @returns The arguments for the current pipe.
   */
  private makeArgs (passable: T[], previousPipeExecutor: PipeExecutor<T, R>, currentPipe: Pipe): PipeArguments<T, R> {
    const params = this.metaPipes.find(v => Boolean(v.params) && v.pipe === currentPipe)?.params ?? []
    return ([] as PipeArguments<T, R>).concat(passable, previousPipeExecutor, params)
  }
}
