[**Pipeline Documentation v0.0.1**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.1](../../modules.md) / [definitions](../README.md) / ReducerCallback

# Type Alias: ReducerCallback()\<T, R\>

> **ReducerCallback**\<`T`, `R`\>: (`previousPipeExecutor`, `currentPipe`) => [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

Reducer callback function type used to build a sequence of pipe executions.

## Type Parameters

• **T** *extends* [`Passable`](Passable.md)

The type of the passable object.

• **R** *extends* [`Passable`](Passable.md) \| `T` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Parameters

• **previousPipeExecutor**: [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

The executor from the previous step in the pipeline.

• **currentPipe**: [`Pipe`](Pipe.md)

The current pipe being added to the sequence.

## Returns

[`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

The combined executor function.

## Defined in

[definitions.ts:54](https://github.com/stonemjs/pipeline/blob/5275b88fe9f1da6af3b6cfe9c64d0c6af6f5eb08/src/definitions.ts#L54)
