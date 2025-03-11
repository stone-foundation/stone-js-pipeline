[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / FunctionalPipe

# Type Alias: FunctionalPipe()\<T, R\>

> **FunctionalPipe**\<`T`, `R`\>: (`passable`, `next`, ...`params`) => [`Promiseable`](Promiseable.md)\<`R`\>

Defined in: [declarations.ts:19](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/declarations.ts#L19)

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

[`Promiseable`](Promiseable.md)\<`R`\>
