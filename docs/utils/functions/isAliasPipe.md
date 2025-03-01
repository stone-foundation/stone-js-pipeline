[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isAliasPipe

# Function: isAliasPipe()

> **isAliasPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: string }`

Defined in: [utils.ts:60](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/utils.ts#L60)

Check if the meta pipe is an alias pipe.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

## Parameters

### metaPipe

[`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The meta pipe to check.

## Returns

`metaPipe is { module: string }`

`true` if the meta pipe is an alias pipe, otherwise `false`.
