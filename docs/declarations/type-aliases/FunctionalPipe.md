[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / FunctionalPipe

# Type Alias: FunctionalPipe()\<T, R\>

> **FunctionalPipe**\<`T`, `R`\> = (`passable`, `next`, ...`params`) => [`Promiseable`](Promiseable.md)\<`R`\>

Defined in: [declarations.ts:19](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L19)

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
