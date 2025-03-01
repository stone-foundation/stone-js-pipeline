[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / PipelineHook

# Type Alias: PipelineHook\<T, R, Args\>

> **PipelineHook**\<`T`, `R`, `Args`\>: `Record`\<[`HookName`](HookName.md), [`PipelineHookListener`](PipelineHookListener.md)\<`T`, `R`, `Args`\>[]\>

Defined in: [declarations.ts:159](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/declarations.ts#L159)

Hook Type.

Represents a hook that can either be synchronous or asynchronous.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]
