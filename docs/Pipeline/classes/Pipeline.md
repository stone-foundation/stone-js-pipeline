[**Pipeline Documentation v0.0.4**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.4](../../modules.md) / [Pipeline](../README.md) / Pipeline

# Class: Pipeline\<T, R\>

Class representing a Pipeline.

## Type Parameters

• **T** *extends* [`Passable`](../../definitions/type-aliases/Passable.md)

The type of the passable object in the pipeline.

• **R** *extends* [`Passable`](../../definitions/type-aliases/Passable.md) \| `T` = `T`

The type of the return value from the pipeline execution.

This class is responsible for managing and executing a series of operations
on a set of passable values through multiple configurable pipes.

## Constructors

### new Pipeline()

> **new Pipeline**\<`T`, `R`\>(`container`?): [`Pipeline`](Pipeline.md)\<`T`, `R`\>

Initialize a new Pipeline instance.

#### Parameters

• **container?**: [`Container`](../../definitions/interfaces/Container.md)

Optional dependency injection container.

#### Returns

[`Pipeline`](Pipeline.md)\<`T`, `R`\>

#### Defined in

[Pipeline.ts:49](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L49)

## Methods

### defaultPriority()

> **defaultPriority**(`value`): `this`

Set the default priority for pipes in the pipeline.

#### Parameters

• **value**: `number`

The priority value to set.

#### Returns

`this`

The current Pipeline instance.

#### Defined in

[Pipeline.ts:65](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L65)

***

### pipe()

> **pipe**(`pipe`): `this`

Add additional pipes to the pipeline.

#### Parameters

• **pipe**: [`MixedPipe`](../../definitions/type-aliases/MixedPipe.md) \| [`MixedPipe`](../../definitions/type-aliases/MixedPipe.md)[]

A single pipe or an array of pipes.

#### Returns

`this`

The current Pipeline instance.

#### Defined in

[Pipeline.ts:102](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L102)

***

### send()

> **send**(...`passable`): `this`

Set the passable objects being sent through the pipeline.

#### Parameters

• ...**passable**: `T`[]

The objects to pass through the pipeline.

#### Returns

`this`

The current Pipeline instance.

#### Defined in

[Pipeline.ts:76](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L76)

***

### sync()

> **sync**(`value`): `this`

Configure the pipeline to run synchronously or asynchronously.

#### Parameters

• **value**: `boolean` = `true`

Set true for sync, false for async (default is true).

#### Returns

`this`

The current Pipeline instance.

#### Defined in

[Pipeline.ts:123](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L123)

***

### then()

> **then**(`destination`): `R` \| `Promise`\<`R`\>

Run the pipeline with a final destination callback.

#### Parameters

• **destination**: [`PipeExecutor`](../../definitions/type-aliases/PipeExecutor.md)\<`T`, `R`\>

The final function to execute.

#### Returns

`R` \| `Promise`\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

#### Defined in

[Pipeline.ts:134](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L134)

***

### thenReturn()

> **thenReturn**(): `R` \| `Promise`\<`R`\>

Run the pipeline and return the result.

#### Returns

`R` \| `Promise`\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

#### Defined in

[Pipeline.ts:148](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L148)

***

### through()

> **through**(`pipes`): `this`

Set the pipes for the pipeline.

#### Parameters

• **pipes**: [`MixedPipe`](../../definitions/type-aliases/MixedPipe.md)[]

Array of pipes or MetaPipe instances.

#### Returns

`this`

The current Pipeline instance.

#### Defined in

[Pipeline.ts:87](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L87)

***

### via()

> **via**(`method`): `this`

Set the method to call on each pipe.

#### Parameters

• **method**: `string`

The method name to use on each pipe.

#### Returns

`this`

The current Pipeline instance.

#### Defined in

[Pipeline.ts:112](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L112)

***

### create()

> `static` **create**(`container`?): [`Pipeline`](Pipeline.md)\<[`Passable`](../../definitions/type-aliases/Passable.md), [`Passable`](../../definitions/type-aliases/Passable.md)\>

Create a pipeline instance.

#### Parameters

• **container?**: [`Container`](../../definitions/interfaces/Container.md)

The optional container for dependency resolution.

#### Returns

[`Pipeline`](Pipeline.md)\<[`Passable`](../../definitions/type-aliases/Passable.md), [`Passable`](../../definitions/type-aliases/Passable.md)\>

The pipeline instance.

#### Defined in

[Pipeline.ts:40](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/Pipeline.ts#L40)
