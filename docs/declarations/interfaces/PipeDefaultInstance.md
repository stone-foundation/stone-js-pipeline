[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipeDefaultInstance

# Interface: PipeDefaultInstance\<T, R\>

Defined in: [declarations.ts:112](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/declarations.ts#L112)

Represents a pipe instance that contains a default pipe function.

## Type Parameters

### T

`T` = `unknown`

The type of the passable object.

### R

`R` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

An object representing a default function used as part of the pipeline.
The key is the `handle` property, which is a function that takes specific arguments.

## Properties

### handle

> **handle**: [`FunctionalPipe`](../type-aliases/FunctionalPipe.md)\<`T`, `R`\>

Defined in: [declarations.ts:113](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/declarations.ts#L113)
