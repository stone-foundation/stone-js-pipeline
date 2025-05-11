[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / defineMiddleware

# Function: defineMiddleware()

> **defineMiddleware**\<`T`, `R`, `Args`\>(`module`, `options`): [`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

Defined in: [utils.ts:10](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/utils.ts#L10)

Define a new middleware for the pipeline.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]

## Parameters

### module

[`PipeType`](../../declarations/type-aliases/PipeType.md)\<`T`, `R`, `Args`\>

The pipe module to add to the pipeline.

### options

`Omit`\<[`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>, `"module"`\> = `{}`

Additional options for the middleware.

## Returns

[`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The metadata for the middleware.
