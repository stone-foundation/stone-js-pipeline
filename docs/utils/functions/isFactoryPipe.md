[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isFactoryPipe

# Function: isFactoryPipe()

> **isFactoryPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: FactoryPipe<T, R, Args> }`

Defined in: [utils.ts:84](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/utils.ts#L84)

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
