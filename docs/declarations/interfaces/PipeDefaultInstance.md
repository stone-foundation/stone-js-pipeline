[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / PipeDefaultInstance

# Interface: PipeDefaultInstance\<T, R\>

Defined in: [declarations.ts:112](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/declarations.ts#L112)

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

Defined in: [declarations.ts:113](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/declarations.ts#L113)
