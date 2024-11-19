[**Pipeline Documentation v0.0.44**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.44](../../modules.md) / [definitions](../README.md) / NextPipe

# Type Alias: NextPipe\<T, R\>

> **NextPipe**\<`T`, `R`\>: [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

Next Pipe Executor function type.

## Type Parameters

• **T** *extends* [`Passable`](Passable.md)

The type of the passable object.

• **R** *extends* [`Passable`](Passable.md) \| `T` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Param

The passable objects being sent through the pipeline.

## Returns

The result of the execution, which could be a synchronous or asynchronous response.

## Defined in

[definitions.ts:52](https://github.com/stonemjs/pipeline/blob/cb206a59f3858db33e7d57a2dba74356bb8f0bc4/src/definitions.ts#L52)
