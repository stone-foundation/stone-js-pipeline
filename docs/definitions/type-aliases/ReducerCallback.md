[**Pipeline Documentation v0.0.41**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.41](../../modules.md) / [definitions](../README.md) / ReducerCallback

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

[definitions.ts:54](https://github.com/stonemjs/pipeline/blob/cd2c1fe6f2982b63b3356203b0c87edf8640b155/src/definitions.ts#L54)
