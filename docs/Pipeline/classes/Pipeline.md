[**Pipeline Documentation v0.0.42**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.42](../../modules.md) / [Pipeline](../README.md) / Pipeline

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

> `protected` **new Pipeline**\<`T`, `R`\>(`container`?): [`Pipeline`](Pipeline.md)\<`T`, `R`\>

Initialize a new Pipeline instance.

#### Parameters

• **container?**: `Container`

Optional dependency injection container.

#### Returns

[`Pipeline`](Pipeline.md)\<`T`, `R`\>

#### Defined in

[Pipeline.ts:50](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L50)

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

[Pipeline.ts:66](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L66)

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

[Pipeline.ts:103](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L103)

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

[Pipeline.ts:77](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L77)

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

[Pipeline.ts:124](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L124)

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

[Pipeline.ts:135](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L135)

***

### thenReturn()

> **thenReturn**(): `R` \| `Promise`\<`R`\>

Run the pipeline and return the result.

#### Returns

`R` \| `Promise`\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

#### Defined in

[Pipeline.ts:149](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L149)

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

[Pipeline.ts:88](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L88)

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

[Pipeline.ts:113](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L113)

***

### create()

> `static` **create**\<`T`, `R`\>(`container`?): [`Pipeline`](Pipeline.md)\<`T`, `R`\>

Create a pipeline instance.

#### Type Parameters

• **T** *extends* [`Passable`](../../definitions/type-aliases/Passable.md)

• **R** *extends* [`Passable`](../../definitions/type-aliases/Passable.md) = `T`

#### Parameters

• **container?**: `Container`

The optional container for dependency resolution.

#### Returns

[`Pipeline`](Pipeline.md)\<`T`, `R`\>

The pipeline instance.

#### Defined in

[Pipeline.ts:41](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/Pipeline.ts#L41)
