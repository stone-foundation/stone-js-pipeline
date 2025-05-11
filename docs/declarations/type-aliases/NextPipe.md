[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / NextPipe

# Type Alias: NextPipe\<T, R\>

> **NextPipe**\<`T`, `R`\> = [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

Defined in: [declarations.ts:58](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L58)

Next Pipe Executor function type.

## Type Parameters

### T

`T` = `unknown`

The type of the passable object.

### R

`R` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Param

The passable objects being sent through the pipeline.

## Returns

The result of the execution, which could be a synchronous or asynchronous response.
