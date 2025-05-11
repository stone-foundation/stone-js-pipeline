[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / isClassPipe

# Function: isClassPipe()

> **isClassPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: PipeClass<T, R, Args> }`

Defined in: [utils.ts:72](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/utils.ts#L72)

Check if the meta pipe is a class pipe.

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

`metaPipe is { module: PipeClass<T, R, Args> }`

`true` if the meta pipe is a class pipe, otherwise `false`.
