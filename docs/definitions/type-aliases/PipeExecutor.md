[**Pipeline Documentation v0.0.1**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.1](../../modules.md) / [definitions](../README.md) / PipeExecutor

# Type Alias: PipeExecutor()\<T, R\>

> **PipeExecutor**\<`T`, `R`\>: (...`passable`) => `R` \| `Promise`\<`R`\>

Pipe Executor function type.

## Type Parameters

• **T** *extends* [`Passable`](Passable.md)

The type of the passable object.

• **R** *extends* [`Passable`](Passable.md) \| `T` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Parameters

• ...**passable**: `T`[]

The passable objects being sent through the pipeline.

## Returns

`R` \| `Promise`\<`R`\>

The result of the execution, which could be a synchronous or asynchronous response.

## Defined in

[definitions.ts:42](https://github.com/stonemjs/pipeline/blob/5275b88fe9f1da6af3b6cfe9c64d0c6af6f5eb08/src/definitions.ts#L42)
