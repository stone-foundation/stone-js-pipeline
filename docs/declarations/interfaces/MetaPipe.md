[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [declarations](../README.md) / MetaPipe

# Interface: MetaPipe\<T, R, Args\>

Defined in: [declarations.ts:134](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L134)

Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.

A configuration object used for managing pipes in the pipeline.

## Type Parameters

### T

`T` = `unknown`

### R

`R` = `T`

### Args

`Args` *extends* `any`[] = `any`[]

## Properties

### isAlias?

> `optional` **isAlias**: `boolean`

Defined in: [declarations.ts:144](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L144)

An optional flag indicating whether the pipe is a container alias.

***

### isClass?

> `optional` **isClass**: `boolean`

Defined in: [declarations.ts:142](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L142)

An optional flag indicating whether the pipe is a class.

***

### isFactory?

> `optional` **isFactory**: `boolean`

Defined in: [declarations.ts:146](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L146)

An optional flag indicating whether the pipe is a factory.

***

### module

> **module**: [`PipeType`](../type-aliases/PipeType.md)\<`T`, `R`, `Args`\>

Defined in: [declarations.ts:136](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L136)

The pipe to execute, which can be a function or a string identifier.

***

### params?

> `optional` **params**: `any`[]

Defined in: [declarations.ts:138](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L138)

An optional array of parameters to pass to the pipe.

***

### priority?

> `optional` **priority**: `number`

Defined in: [declarations.ts:140](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/declarations.ts#L140)

An optional priority level of the pipe.
