[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / isFactoryPipe

# Function: isFactoryPipe()

> **isFactoryPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: FactoryPipe<T, R, Args> }`

Defined in: [utils.ts:84](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/utils.ts#L84)

Check if the meta pipe is a factory pipe.

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

`metaPipe is { module: FactoryPipe<T, R, Args> }`

`true` if the meta pipe is a factory pipe, otherwise `false`.
