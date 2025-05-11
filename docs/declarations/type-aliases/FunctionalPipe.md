[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / FunctionalPipe

# Type Alias: FunctionalPipe()\<T, R\>

> **FunctionalPipe**\<`T`, `R`\> = (`passable`, `next`, ...`params`) => [`Promiseable`](Promiseable.md)\<`R`\>

Defined in: [declarations.ts:19](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L19)

A function type that represents a pipe.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

## Parameters

### passable

`T`

### next

[`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

### params

...`any`[]

## Returns

[`Promiseable`](Promiseable.md)\<`R`\>
