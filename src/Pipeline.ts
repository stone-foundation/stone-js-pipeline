import {
  isString,
  isFunction,
  isClassPipe,
  isFactoryPipe
} from './utils'
import {
  HookName,
  MetaPipe,
  MixedPipe,
  Promiseable,
  PipeExecutor,
  PipelineHook,
  PipeResolver,
  PipelineOptions,
  ReducerCallback,
  PipeCustomInstance,
  PipelineHookListener
} from './declarations'
import { PipelineError } from './PipelineError'

/**
 * Class representing a Pipeline.
 *
 * @template T - The type of the passable object in the pipeline.
 * @template R - The type of the return value from the pipeline execution.
 *
 * This class is responsible for managing and executing a series of operations
 * on a set of passable values through multiple configurable pipes.
 */
export class Pipeline<T = unknown, R = T, Args extends any[] = any[]> {
  /** The passable objects sent through the pipeline */
  private passable?: T

  /** The method name to call on each pipe */
  private method: string

  /** Flag indicating whether the pipeline should run synchronously or asynchronously */
  private isSync: boolean

  /** The default priority for the pipes in the pipeline */
  private _defaultPriority: number

  /** The sorted metadata pipes that will be executed */
  private sortedMetaPipes: Array<MetaPipe<T, R, Args>>

  /** The pipeline hooks */
  private readonly hooks: PipelineHook<T, R, Args>

  /** The resolver function used to resolve pipes before they are executed in the pipeline. */
  private readonly resolver?: PipeResolver<T, R>

  /**
   * Create a pipeline instance.
   *
   * @param options - Optional Pipeline options.
   * @returns The pipeline instance.
   */
  static create<T = unknown, R = T, Args extends any[] = any[]>(options?: PipelineOptions<T, R, Args>): Pipeline<T, R> {
    return new this(options)
  }

  /**
   * Initialize a new Pipeline instance.
   *
   * @param options - Optional Pipeline options.
   */
  protected constructor (options?: PipelineOptions<T, R, Args>) {
    this.isSync = false
    this.method = 'handle'
    this.sortedMetaPipes = []
    this._defaultPriority = 10
    this.resolver = options?.resolver
    this.hooks = options?.hooks ?? {} as any
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
   * @param passable - The object to pass through the pipeline.
   * @returns The current Pipeline instance.
   */
  send (passable: T): this {
    this.passable = passable
    return this
  }

  /**
   * Set the pipes for the pipeline.
   *
   * @param pipes - The pipes or MetaPipe instances.
   * @returns The current Pipeline instance.
   */
  through (...pipes: Array<MixedPipe<T, R, Args>>): this {
    const priority = this._defaultPriority
    const metaPipes = pipes.map(
      pipe => (isString(pipe) || isFunction(pipe)) ? { module: pipe, priority } : { priority, ...pipe }
    )

    this.sortedMetaPipes = Array
      .from(metaPipes.reduce((acc, pipe) => acc.set(pipe.module, pipe), new Map()).values())
      .sort((a, b) => a.priority !== undefined && b.priority !== undefined ? a.priority - b.priority : 0)
      .reverse()

    return this
  }

  /**
   * Add additional pipes to the pipeline.
   *
   * @param {...MixedPipe} pipe - A single pipe or a list of pipes to add.
   * @returns The current Pipeline instance.
   */
  pipe (...pipe: Array<MixedPipe<T, R, Args>>): this {
    return this.through(...this.sortedMetaPipes, ...pipe)
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
   * Add a hook to the pipeline.
   *
   * @param name - The name of the hook.
   * @param listener - The hook listener function.
   * @returns The current Pipeline instance.
   */
  on (name: HookName, listener: PipelineHookListener<T, R, Args> | Array<PipelineHookListener<T, R, Args>>): this {
    this.hooks[name] ??= []
    this.hooks[name] = this.hooks[name].concat(listener)

    return this
  }

  /**
   * Run the pipeline with a final destination callback.
   *
   * @param destination - The final function to execute.
   * @returns The result of the pipeline, either synchronously or as a Promise.
   */
  then (destination: PipeExecutor<T, R>): Promiseable<R> {
    if (this.passable === undefined) {
      throw new PipelineError('No passable object has been set for this pipeline.')
    }

    return this
      .sortedMetaPipes
      .reduce<PipeExecutor<T, R>>(
      this.isSync ? this.reducer() : this.asyncReducer(),
      destination.bind(destination)
    )(this.passable)
  }

  /**
   * Run the pipeline and return the result.
   *
   * @returns The result of the pipeline, either synchronously or as a Promise.
   */
  thenReturn (): Promiseable<R> {
    return this.then((passable) => passable as unknown as R)
  }

  /**
   * Get the asynchronous reducer to iterate over the pipes.
   *
   * @returns The asynchronous reducer callback.
   */
  private asyncReducer (): ReducerCallback<T, R, Args> {
    return (previousPipeExecutor: PipeExecutor<T, R>, currentPipe: MetaPipe<T, R, Args>): PipeExecutor<T, R> => {
      return async (passable: T): Promise<R> => {
        return await this.executeAsyncPipe(currentPipe, passable, previousPipeExecutor)
      }
    }
  }

  /**
   * Get the synchronous reducer to iterate over the pipes.
   *
   * @returns The synchronous reducer callback.
   */
  private reducer (): ReducerCallback<T, R, Args> {
    return (previousPipeExecutor: PipeExecutor<T, R>, currentPipe: MetaPipe<T, R, Args>): PipeExecutor<T, R> => {
      return (passable: T): R => {
        return this.executePipe(currentPipe, passable, previousPipeExecutor)
      }
    }
  }

  /**
   * Resolve and execute async pipe.
   *
   * @param currentPipe - The current pipe to execute (class or service alias string).
   * @param passable - The passable object to send through the pipe.
   * @param previousPipeExecutor - The previous pipe executor in the sequence.
   * @returns The result of the pipe execution.
   * @throws PipelineError If the pipe cannot be resolved or the method is missing.
   */
  private async executeAsyncPipe (currentPipe: MetaPipe<T, R, Args>, passable: T, previousPipeExecutor: PipeExecutor<T, R>): Promise<R> {
    const instance = this.resolvePipe(currentPipe)

    await this.executeAsyncHooks('onProcessingPipe', currentPipe, instance, passable)

    const result = await instance[this.method](passable, previousPipeExecutor, ...(currentPipe.params ?? []))

    await this.executeAsyncHooks('onPipeProcessed', currentPipe, instance, passable)

    return result
  }

  /**
   * Resolve and execute a pipe.
   *
   * @param currentPipe - The current pipe to execute (class or service alias string).
   * @param passable - The passable object to send through the pipe.
   * @param previousPipeExecutor - The previous pipe executor in the sequence.
   * @returns The result of the pipe execution.
   * @throws PipelineError If the pipe cannot be resolved or the method is missing.
   */
  private executePipe (currentPipe: MetaPipe<T, R, Args>, passable: T, previousPipeExecutor: PipeExecutor<T, R>): R {
    const instance = this.resolvePipe(currentPipe)

    this.executeHooks('onProcessingPipe', currentPipe, instance, passable)

    const result = instance[this.method](passable, previousPipeExecutor, ...(currentPipe.params ?? []))

    this.executeHooks('onPipeProcessed', currentPipe, instance, passable)

    return result
  }

  /**
   * Resolve pipe.
   *
   * @param currentPipe - The current pipe to execute (class or service alias string).
   * @returns The resolved pipe instance.
   * @throws PipelineError If the pipe cannot be resolved or the method is missing.
   */
  private resolvePipe (currentPipe: MetaPipe<T, R, Args>): PipeCustomInstance<T, R> {
    let instance = (isFunction(this.resolver) ? this.resolver(currentPipe) : undefined) as (PipeCustomInstance<T, R> | undefined)

    if (instance === undefined) {
      instance = this.createInstanceFromPipe(currentPipe)

      if (instance === undefined) {
        throw new PipelineError(`Cannot resolve this pipe ${String(currentPipe)}.`)
      }
    } else if (isFunction(instance)) {
      instance = { [this.method]: instance }
    }

    this.validatePipeMethod(instance, currentPipe)

    return instance
  }

  /**
   * Create an instance from the provided pipe.
   *
   * @param currentPipe - The pipe function to create an instance from.
   * @returns The created instance or an object with the method.
   */
  private createInstanceFromPipe (currentPipe: MetaPipe<T, R, Args>): PipeCustomInstance<T, R> | undefined {
    if (isFunction(currentPipe.module)) {
      if (isClassPipe(currentPipe)) {
        return new currentPipe.module.prototype.constructor(...([] as unknown as Args))
      }
      return {
        [this.method]: isFactoryPipe(currentPipe)
          ? currentPipe.module(...([] as unknown as Args))
          : currentPipe.module
      }
    }
  }

  /**
   * Validate that the required method exists on the instance.
   *
   * @param instance - The instance to validate.
   * @param currentPipe - The current pipe being executed.
   * @throws {PipelineError} If the method does not exist on the instance.
   */
  private validatePipeMethod (instance: PipeCustomInstance<T, R>, currentPipe: MetaPipe<T, R, Args>): void {
    if (!isFunction(instance[this.method])) {
      throw new PipelineError(
        `No method with this name(${this.method}) exists in this constructor(${currentPipe.module.constructor.name})`
      )
    }
  }

  /**
   * Execute lifecycle async hooks.
   *
   * @param name - The hook's name.
   * @param pipe - The current pipe instance.
   */
  private async executeAsyncHooks (
    name: HookName,
    pipe: MetaPipe<T, R, Args>,
    instance: PipeCustomInstance<T, R>,
    passable: T
  ): Promise<void> {
    if (Array.isArray(this.hooks[name])) {
      for (const listener of this.hooks[name]) {
        await listener({ passable, instance, pipe, pipes: this.sortedMetaPipes })
      }
    }
  }

  /**
   * Execute lifecycle hooks.
   *
   * @param name - The hook's name.
   * @param pipe - The current pipe instance.
   */
  private executeHooks (
    name: HookName,
    pipe: MetaPipe<T, R, Args>,
    instance: PipeCustomInstance<T, R>,
    passable: T
  ): void {
    if (Array.isArray(this.hooks[name])) {
      for (const listener of this.hooks[name]) {
        listener({ passable, instance, pipe, pipes: this.sortedMetaPipes }) as never
      }
    }
  }
}
