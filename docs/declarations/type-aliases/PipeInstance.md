[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipeInstance

# Type Alias: PipeInstance\<T, R\>

> **PipeInstance**\<`T`, `R`\> = [`PipeDefaultInstance`](../interfaces/PipeDefaultInstance.md)\<`T`, `R`\> \| [`PipeCustomInstance`](../interfaces/PipeCustomInstance.md)\<`T`, `R`\>

Defined in: [declarations.ts:101](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/declarations.ts#L101)

Represents a pipe instance that contains different pipe functions.

## Type Parameters

### T

`T` = `unknown`

The type of the passable object.

### R

`R` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

An object representing a set of functions used as part of the pipeline.
The keys represent function names, and the values are functions that take specific arguments.
