[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isFunctionPipe

# Function: isFunctionPipe()

> **isFunctionPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: FunctionalPipe<T, R> }`

Defined in: [utils.ts:48](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/utils.ts#L48)

Check if the meta pipe is a function pipe.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

## Parameters

### metaPipe

[`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The meta pipe to check.

## Returns

`metaPipe is { module: FunctionalPipe<T, R> }`

`true` if the meta pipe is a function pipe, otherwise `false`.
