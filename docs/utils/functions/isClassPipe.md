[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isClassPipe

# Function: isClassPipe()

> **isClassPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: PipeClass<T, R, Args> }`

Defined in: [utils.ts:72](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/utils.ts#L72)

Check if the meta pipe is a class pipe.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

## Parameters

### metaPipe

[`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The meta pipe to check.

## Returns

`metaPipe is { module: PipeClass<T, R, Args> }`

`true` if the meta pipe is a class pipe, otherwise `false`.
