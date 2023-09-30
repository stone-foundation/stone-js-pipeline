[**Pipeline Documentation v0.0.1**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.1](../../modules.md) / [definitions](../README.md) / PipeInstance

# Interface: PipeInstance\<T, R\>

Represents a pipe instance that contains different pipe functions.

## Type Parameters

• **T** *extends* [`Passable`](../type-aliases/Passable.md)

The type of the passable object.

• **R** *extends* [`Passable`](../type-aliases/Passable.md) \| `T` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

An object representing a set of functions used as part of the pipeline.
The keys represent function names, and the values are functions that take specific arguments.

## Indexable

 \[`key`: `string`\]: (...`args`) => `R`
