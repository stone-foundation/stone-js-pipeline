[**Pipeline Documentation v0.0.43**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.43](../../modules.md) / [definitions](../README.md) / NextPipe

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

[definitions.ts:52](https://github.com/stonemjs/pipeline/blob/b0cce491d02e84a282eddf56874b02f5e8e7e66d/src/definitions.ts#L52)
