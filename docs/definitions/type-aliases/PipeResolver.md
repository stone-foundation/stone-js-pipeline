[**Pipeline Documentation v0.0.44**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.44](../../modules.md) / [definitions](../README.md) / PipeResolver

# Type Alias: PipeResolver()\<T, R\>

> **PipeResolver**\<`T`, `R`\>: (`pipe`) => [`PipeInstance`](../interfaces/PipeInstance.md)\<`T`, `R`\>

A function type that represents a resolver for a given pipe.

## Type Parameters

• **T** *extends* [`Passable`](Passable.md)

The type of the passable object in the pipeline.

• **R** *extends* [`Passable`](Passable.md) \| `T` = `T`

The type of the return value from the resolved pipe, which defaults to `T`.

## Parameters

• **pipe**: [`MixedPipe`](MixedPipe.md)

The pipe that needs to be resolved, which can be either a simple pipe or a MetaPipe.

## Returns

[`PipeInstance`](../interfaces/PipeInstance.md)\<`T`, `R`\>

The resolved pipe instance of type `PipeInstance<T, R>`.

This type is used to provide a custom mechanism for resolving pipes before they are executed in the pipeline.

## Defined in

[definitions.ts:76](https://github.com/stonemjs/pipeline/blob/cb206a59f3858db33e7d57a2dba74356bb8f0bc4/src/definitions.ts#L76)
