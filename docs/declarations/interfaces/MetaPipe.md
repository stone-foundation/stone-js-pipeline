[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / MetaPipe

# Interface: MetaPipe\<T, R, Args\>

Defined in: [declarations.ts:128](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L128)

Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.

A configuration object used for managing pipes in the pipeline.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

## Properties

### isAlias?

> `optional` **isAlias**: `boolean`

Defined in: [declarations.ts:138](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L138)

An optional flag indicating whether the pipe is a container alias.

***

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [declarations.ts:136](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L136)

An optional flag indicating whether the pipe is a class.

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [declarations.ts:140](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L140)

An optional flag indicating whether the pipe is a factory.

***

### module

> **module**: [`PipeType`](../type-aliases/PipeType.md)\<`T`, `R`, `Args`\>

Defined in: [declarations.ts:130](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L130)

The pipe to execute, which can be a function or a string identifier.

***

### params?

> `optional` **params**: `any`[]

Defined in: [declarations.ts:132](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L132)

An optional array of parameters to pass to the pipe.

***

### priority?

> `optional` **priority**: `number`

Defined in: [declarations.ts:134](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L134)

An optional priority level of the pipe.
