[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / PipeDefaultInstance

# Interface: PipeDefaultInstance\<T, R\>

Defined in: [declarations.ts:106](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L106)

Represents a pipe instance that contains a default pipe function.

## Type Parameters

• **T** = `unknown`

The type of the passable object.

• **R** = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

An object representing a default function used as part of the pipeline.
The key is the `handle` property, which is a function that takes specific arguments.

## Properties

### handle

> **handle**: [`FunctionalPipe`](../type-aliases/FunctionalPipe.md)\<`T`, `R`\>

Defined in: [declarations.ts:107](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L107)
