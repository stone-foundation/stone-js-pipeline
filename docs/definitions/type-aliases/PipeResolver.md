[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [definitions](../README.md) / PipeResolver

# Type Alias: PipeResolver()\<T, R\>

> **PipeResolver**\<`T`, `R`\>: (`pipe`) => [`PipeInstance`](../interfaces/PipeInstance.md)\<`T`, `R`\> \| `undefined`

Defined in: [definitions.ts:76](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L76)

A function type that represents a resolver for a given pipe.

## Type Parameters

• **T** *extends* [`Passable`](Passable.md)

The type of the passable object in the pipeline.

• **R** *extends* [`Passable`](Passable.md) \| `T` = `T`

The type of the return value from the resolved pipe, which defaults to `T`.

## Parameters

### pipe

[`Pipe`](Pipe.md)

The pipe that needs to be resolved, which can be either a simple pipe or a MetaPipe.

## Returns

[`PipeInstance`](../interfaces/PipeInstance.md)\<`T`, `R`\> \| `undefined`

The resolved pipe instance of type `PipeInstance<T, R> | undefined`.

This type is used to provide a custom mechanism for resolving pipes before they are executed in the pipeline.
