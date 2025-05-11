[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / isAliasPipe

# Function: isAliasPipe()

> **isAliasPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: string }`

Defined in: [utils.ts:60](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/utils.ts#L60)

Check if the meta pipe is an alias pipe.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]

## Parameters

### metaPipe

[`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The meta pipe to check.

## Returns

`metaPipe is { module: string }`

`true` if the meta pipe is an alias pipe, otherwise `false`.
