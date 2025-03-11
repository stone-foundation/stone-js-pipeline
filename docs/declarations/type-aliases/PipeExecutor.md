[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / PipeExecutor

# Type Alias: PipeExecutor()\<T, R\>

> **PipeExecutor**\<`T`, `R`\>: (`passable`) => [`Promiseable`](Promiseable.md)\<`R`\>

Defined in: [declarations.ts:47](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/declarations.ts#L47)

Pipe Executor function type.

## Type Parameters

• **T** = `unknown`

The type of the passable object.

• **R** = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Parameters

### passable

`T`

The passable objects being sent through the pipeline.

## Returns

[`Promiseable`](Promiseable.md)\<`R`\>

The result of the execution, which could be a synchronous or asynchronous response.
