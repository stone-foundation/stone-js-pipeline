[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipeCustomInstance

# Interface: PipeCustomInstance\<T, R\>

Defined in: [declarations.ts:125](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L125)

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

## Indexable

\[`key`: `string`\]: `any`
