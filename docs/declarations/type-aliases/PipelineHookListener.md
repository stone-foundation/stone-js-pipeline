[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / PipelineHookListener

# Type Alias: PipelineHookListener()\<T, R, Args\>

> **PipelineHookListener**\<`T`, `R`, `Args`\>: (`context`) => [`Promiseable`](Promiseable.md)\<`void`\>

Defined in: [declarations.ts:176](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/declarations.ts#L176)

PipelineHookListener Type.

Represents a listener hook that can either be synchronous or asynchronous.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

## Parameters

### context

[`PipelineHookContext`](../interfaces/PipelineHookContext.md)\<`T`, `R`, `Args`\>

## Returns

[`Promiseable`](Promiseable.md)\<`void`\>
