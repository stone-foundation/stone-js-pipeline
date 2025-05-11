[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipeType

# Type Alias: PipeType\<T, R, Args\>

> **PipeType**\<`T`, `R`, `Args`\> = [`PipeAlias`](PipeAlias.md) \| [`PipeClass`](PipeClass.md)\<`T`, `R`, `Args`\> \| [`FunctionalPipe`](FunctionalPipe.md)\<`T`, `R`\> \| [`FactoryPipe`](FactoryPipe.md)\<`T`, `R`, `Args`\>

Defined in: [declarations.ts:31](https://github.com/stonemjs/pipeline/blob/4373463e5220be8ed997c5e4b7e1c704715db014/src/declarations.ts#L31)

A type that can either be a function or a string, representing a pipeline step.

A pipe can either be a function that performs an action or a string identifier to be resolved.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]
