[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [definitions](../README.md) / PipeInstance

# Interface: PipeInstance\<T, R\>

Defined in: [definitions.ts:87](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L87)

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
