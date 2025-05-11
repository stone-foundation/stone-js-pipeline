[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipelineHookListener

# Type Alias: PipelineHookListener()\<T, R, Args\>

> **PipelineHookListener**\<`T`, `R`, `Args`\> = (`context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [declarations.ts:176](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L176)

PipelineHookListener Type.

Represents a listener hook that can either be synchronous or asynchronous.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]

## Parameters

### context

[`PipelineHookContext`](../interfaces/PipelineHookContext.md)\<`T`, `R`, `Args`\>

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>
