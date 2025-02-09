[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / FunctionalPipe

# Type Alias: FunctionalPipe()\<T, R\>

> **FunctionalPipe**\<`T`, `R`\>: (`passable`, `next`, ...`params`) => `R` \| `Promise`\<`R`\>

Defined in: [declarations.ts:14](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L14)

A function type that represents a pipe.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

## Parameters

### passable

`T`

### next

[`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\>

### params

...`any`[]

## Returns

`R` \| `Promise`\<`R`\>
