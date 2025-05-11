[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / ReducerCallback

# Type Alias: ReducerCallback()\<T, R, Args\>

> **ReducerCallback**\<`T`, `R`, `Args`\> = (`previousPipeExecutor`, `currentPipe`) => [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

Defined in: [declarations.ts:70](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L70)

Reducer callback function type used to build a sequence of pipe executions.

## Type Parameters

### T

`T` = `unknown`

The type of the passable object.

### R

`R` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

### Args

`Args` *extends* `any`[] = `any`[]

## Parameters

### previousPipeExecutor

[`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

The executor from the previous step in the pipeline.

### currentPipe

[`MetaPipe`](../interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The current pipe being added to the sequence.

## Returns

[`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

The combined executor function.
