[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / defineMiddleware

# Function: defineMiddleware()

> **defineMiddleware**\<`T`, `R`, `Args`\>(`module`, `options`): [`MetaPipe`](../../declarations/interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

Defined in: [utils.ts:10](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/utils.ts#L10)

Define a new middleware for the pipeline.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

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
