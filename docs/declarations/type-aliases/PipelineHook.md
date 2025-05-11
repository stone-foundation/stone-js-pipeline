[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipelineHook

# Type Alias: PipelineHook\<T, R, Args\>

> **PipelineHook**\<`T`, `R`, `Args`\> = `Record`\<[`HookName`](HookName.md), [`PipelineHookListener`](PipelineHookListener.md)\<`T`, `R`, `Args`\>[]\>

Defined in: [declarations.ts:159](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L159)

Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]
