[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipelineHook

# Type Alias: PipelineHook\<T, R, Args\>

> **PipelineHook**\<`T`, `R`, `Args`\> = `Record`\<[`HookName`](HookName.md), [`PipelineHookListener`](PipelineHookListener.md)\<`T`, `R`, `Args`\>[]\>

Defined in: [declarations.ts:159](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/declarations.ts#L159)

Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]
