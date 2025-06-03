[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipelineHook

# Type Alias: PipelineHook\<T, R, Args\>

> **PipelineHook**\<`T`, `R`, `Args`\> = `Record`\<[`HookName`](HookName.md), [`PipelineHookListener`](PipelineHookListener.md)\<`T`, `R`, `Args`\>[]\>

Defined in: [declarations.ts:159](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L159)

Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]
