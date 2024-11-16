/**
 * A type that can either be a function or a string, representing a pipeline step.
 *
 * A pipe can either be a function that performs an action or a string identifier
 * to be resolved by the container.
 */
export type Pipe = ((...args: any[]) => any) | string | Function

/**
 * A mixed type that can be either a simple Pipe or a MetaPipe configuration.
 */
export type MixedPipe = Pipe | MetaPipe

/**
 * A type that represents a passable value through the pipeline.
 * It can be an object, a string, a number, or a generic record object.
 */
export type Passable = object | string | number | Record<string, unknown>

/**
 * Represents the arguments passed to a pipe execution function.
 *
 * The array can include:
 * - `T`: The passable value (of type `Passable`).
 * - `PipeExecutor<T, R>`: The executor function for the pipe.
 * - `unknown[]`: Additional arguments that might be used during execution.
 *
 * @template T - The type of the passable object.
 * @template R - The type of the return value from the pipeline execution, defaulting to `T`.
 */
export type PipeArguments<T extends Passable, R extends Passable | T = T> = Array<T | PipeExecutor<T, R> | unknown[]>

/**
 * Pipe Executor function type.
 *
 * @param passable - The passable objects being sent through the pipeline.
 * @returns The result of the execution, which could be a synchronous or asynchronous response.
 *
 * @template T - The type of the passable object.
 * @template R - The type of the return value from the pipeline execution, defaulting to `T`.
 */
export type PipeExecutor<T extends Passable, R extends Passable | T = T> = (...passable: T[]) => R | Promise<R>

/**
 * Reducer callback function type used to build a sequence of pipe executions.
 *
 * @param previousPipeExecutor - The executor from the previous step in the pipeline.
 * @param currentPipe - The current pipe being added to the sequence.
 * @returns The combined executor function.
 *
 * @template T - The type of the passable object.
 * @template R - The type of the return value from the pipeline execution, defaulting to `T`.
 */
export type ReducerCallback<T extends Passable, R extends Passable | T = T> = (previousPipeExecutor: PipeExecutor<T, R>, currentPipe: Pipe) => PipeExecutor<T, R>

/**
 * Represents a pipe instance that contains different pipe functions.
 *
 * @template T - The type of the passable object.
 * @template R - The type of the return value from the pipeline execution, defaulting to `T`.
 *
 * An object representing a set of functions used as part of the pipeline.
 * The keys represent function names, and the values are functions that take specific arguments.
 */
export interface PipeInstance<T extends Passable, R extends Passable | T = T> {
  [key: string]: (...args: PipeArguments<T, R>) => R
}

/**
 * Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.
 *
 * A configuration object used for managing pipes in the pipeline.
 */
export interface MetaPipe {
  /** The pipe to execute, which can be a function or a string identifier. */
  pipe: Pipe
  /** An optional array of parameters to pass to the pipe. */
  params?: unknown[]
  /** An optional priority level of the pipe. */
  priority?: number
}
