import { Container, MetaPipe, MixedPipe, Passable, Pipe, PipeArguments, PipeExecutor, PipeInstance, ReducerCallback } from './definitions'

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

  /** The optional container used for dependency resolution */
  private readonly container?: Container

  /** The default priority for the pipes in the pipeline */
  private _defaultPriority: number

  /**
   * Create a pipeline instance.
   *
   * @param container - The optional container for dependency resolution.
   * @returns The pipeline instance.
   */
  static create (container?: Container): Pipeline<Passable> {
    return new this(container)
  }

  /**
   * Initialize a new Pipeline instance.
   *
   * @param container - Optional dependency injection container.
   */
  constructor (container?: Container) {
    this.passable = []
    this.isSync = false
    this.metaPipes = []
    this.sortedPipes = []
    this.method = 'handle'
    this.container = container
    this._defaultPriority = 10
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
   * @throws TypeError If the pipe cannot be resolved or the method is missing.
   */
  private executePipe (currentPipe: Pipe, args: PipeArguments<T, R>): R {
    let instance: PipeInstance<T, R>

    if (this.container?.has(currentPipe) === true) {
      instance = this.container.resolve(currentPipe)
    } else if (typeof currentPipe === 'function') {
      instance = Object.prototype.hasOwnProperty.call(currentPipe, 'prototype') ? new currentPipe.prototype.constructor() : { [this.method]: currentPipe }
    } else {
      throw new TypeError(`Cannot resolve this pipe ${currentPipe}.`)
    }

    if (instance[this.method] === undefined) {
      throw new TypeError(`No method with this name(${this.method}) exists in this constructor(${currentPipe.constructor.name})`)
    }

    return instance[this.method].apply(instance, args)
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
