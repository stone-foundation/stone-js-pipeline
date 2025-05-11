[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / MixedPipe

# Type Alias: MixedPipe\<T, R, Args\>

> **MixedPipe**\<`T`, `R`, `Args`\> = [`PipeType`](PipeType.md)\<`T`, `R`, `Args`\> \| [`MetaPipe`](../interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

Defined in: [declarations.ts:36](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L36)

A mixed type that can be either a simple Pipe or a MetaPipe configuration.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]
