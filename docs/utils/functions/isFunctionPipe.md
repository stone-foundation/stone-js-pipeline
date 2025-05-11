[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / isFunctionPipe

# Function: isFunctionPipe()

> **isFunctionPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: FunctionalPipe<T, R> }`

Defined in: [utils.ts:48](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/utils.ts#L48)

Check if the meta pipe is a function pipe.

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

`metaPipe is { module: FunctionalPipe<T, R> }`

`true` if the meta pipe is a function pipe, otherwise `false`.
