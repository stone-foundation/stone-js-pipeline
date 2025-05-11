[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / isFactoryPipe

# Function: isFactoryPipe()

> **isFactoryPipe**\<`T`, `R`, `Args`\>(`metaPipe`): `metaPipe is { module: FactoryPipe<T, R, Args> }`

Defined in: [utils.ts:84](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/utils.ts#L84)

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
