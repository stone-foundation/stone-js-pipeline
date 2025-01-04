[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [definitions](../README.md) / PipeExecutor

# Type Alias: PipeExecutor()\<T, R\>

> **PipeExecutor**\<`T`, `R`\>: (...`passable`) => `R` \| `Promise`\<`R`\>

Defined in: [definitions.ts:41](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L41)

Pipe Executor function type.

## Type Parameters

• **T** *extends* [`Passable`](Passable.md)

The type of the passable object.

• **R** *extends* [`Passable`](Passable.md) \| `T` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Parameters

### passable

...`T`[]

The passable objects being sent through the pipeline.

## Returns

`R` \| `Promise`\<`R`\>

The result of the execution, which could be a synchronous or asynchronous response.
