[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / MixedPipe

# Type Alias: MixedPipe\<T, R, Args\>

> **MixedPipe**\<`T`, `R`, `Args`\> = [`PipeType`](PipeType.md)\<`T`, `R`, `Args`\> \| [`MetaPipe`](../interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

Defined in: [declarations.ts:36](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L36)

A mixed type that can be either a simple Pipe or a MetaPipe configuration.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]
