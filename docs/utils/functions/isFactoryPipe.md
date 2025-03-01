[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isFactoryPipe

# Function: isFactoryPipe()

> **isFactoryPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: FactoryPipe<T, R, Args> }`

Defined in: [utils.ts:84](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/utils.ts#L84)

Check if the meta pipe is a factory pipe.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

## Parameters

### metaPipe

[`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The meta pipe to check.

## Returns

`metaPipe is { module: FactoryPipe<T, R, Args> }`

`true` if the meta pipe is a factory pipe, otherwise `false`.
