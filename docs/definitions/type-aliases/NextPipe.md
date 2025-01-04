[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [definitions](../README.md) / NextPipe

# Type Alias: NextPipe\<T, R\>

> **NextPipe**\<`T`, `R`\>: [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

Defined in: [definitions.ts:52](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L52)

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
