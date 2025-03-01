[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / NextPipe

# Type Alias: NextPipe\<T, R\>

> **NextPipe**\<`T`, `R`\>: [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

Defined in: [declarations.ts:58](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/declarations.ts#L58)

Next Pipe Executor function type.

## Type Parameters

• **T** = `unknown`

The type of the passable object.

• **R** = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Param

The passable objects being sent through the pipeline.

## Returns

The result of the execution, which could be a synchronous or asynchronous response.
