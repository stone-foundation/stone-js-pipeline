[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isAliasPipe

# Function: isAliasPipe()

> **isAliasPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: string }`

Defined in: [utils.ts:60](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/utils.ts#L60)

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
