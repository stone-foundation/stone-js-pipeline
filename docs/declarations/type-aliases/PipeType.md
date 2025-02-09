[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / PipeType

# Type Alias: PipeType\<T, R, Args\>

> **PipeType**\<`T`, `R`, `Args`\>: [`PipeAlias`](PipeAlias.md) \| [`PipeClass`](PipeClass.md)\<`T`, `R`, `Args`\> \| [`FunctionalPipe`](FunctionalPipe.md)\<`T`, `R`\> \| [`FactoryPipe`](FactoryPipe.md)\<`T`, `R`, `Args`\>

Defined in: [declarations.ts:26](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/declarations.ts#L26)

A type that can either be a function or a string, representing a pipeline step.

A pipe can either be a function that performs an action or a string identifier to be resolved.

## Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]
