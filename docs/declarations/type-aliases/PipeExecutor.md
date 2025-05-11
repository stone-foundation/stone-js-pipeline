[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipeExecutor

# Type Alias: PipeExecutor()\<T, R\>

> **PipeExecutor**\<`T`, `R`\> = (`passable`) => [`Promiseable`](Promiseable.md)\<`R`\>

Defined in: [declarations.ts:47](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/declarations.ts#L47)

Pipe Executor function type.

## Type Parameters

### T

`T` = `unknown`

The type of the passable object.

### R

`R` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Parameters

### passable

`T`

The passable objects being sent through the pipeline.

## Returns

[`Promiseable`](Promiseable.md)\<`R`\>

The result of the execution, which could be a synchronous or asynchronous response.
