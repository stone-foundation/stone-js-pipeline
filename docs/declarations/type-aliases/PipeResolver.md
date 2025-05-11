[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / PipeResolver

# Type Alias: PipeResolver()\<T, R, Args\>

> **PipeResolver**\<`T`, `R`, `Args`\> = (`pipe`) => [`PipeInstance`](PipeInstance.md)\<`T`, `R`\> \| `undefined`

Defined in: [declarations.ts:82](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/declarations.ts#L82)

A function type that represents a resolver for a given pipe.

## Type Parameters

### T

`T` = `unknown`

The type of the passable object in the pipeline.

### R

`R` = `T`

The type of the return value from the resolved pipe, which defaults to `T`.

### Args

`Args` *extends* `any`[] = `any`[]

## Parameters

### pipe

[`MetaPipe`](../interfaces/MetaPipe.md)\<`T`, `R`, `Args`\>

The pipe that needs to be resolved, which can be either a simple pipe or a MetaPipe.

## Returns

[`PipeInstance`](PipeInstance.md)\<`T`, `R`\> \| `undefined`

The resolved pipe instance of type `PipeInstance<T, R> | undefined`.

This type is used to provide a custom mechanism for resolving pipes before they are executed in the pipeline.
