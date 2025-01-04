[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [Pipeline](../README.md) / Pipeline

# Class: Pipeline\<T, R\>

Defined in: [Pipeline.ts:13](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L13)

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

> `protected` **new Pipeline**\<`T`, `R`\>(`options`?): [`Pipeline`](Pipeline.md)\<`R`\>

Defined in: [Pipeline.ts:50](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L50)

Initialize a new Pipeline instance.

#### Parameters

##### options?

[`PipelineOptions`](../../definitions/interfaces/PipelineOptions.md)\<`T`, `R`\>

Optional Pipeline options.

#### Returns

[`Pipeline`](Pipeline.md)\<`R`\>

## Methods

### defaultPriority()

> **defaultPriority**(`value`): `this`

Defined in: [Pipeline.ts:66](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L66)

Set the default priority for pipes in the pipeline.

#### Parameters

##### value

`number`

The priority value to set.

#### Returns

`this`

The current Pipeline instance.

***

### pipe()

> **pipe**(`pipe`): `this`

Defined in: [Pipeline.ts:103](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L103)

Add additional pipes to the pipeline.

#### Parameters

##### pipe

A single pipe or an array of pipes.

[`MixedPipe`](../../definitions/type-aliases/MixedPipe.md) | [`MixedPipe`](../../definitions/type-aliases/MixedPipe.md)[]

#### Returns

`this`

The current Pipeline instance.

***

### send()

> **send**(...`passable`): `this`

Defined in: [Pipeline.ts:77](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L77)

Set the passable objects being sent through the pipeline.

#### Parameters

##### passable

...`T`[]

The objects to pass through the pipeline.

#### Returns

`this`

The current Pipeline instance.

***

### sync()

> **sync**(`value`): `this`

Defined in: [Pipeline.ts:124](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L124)

Configure the pipeline to run synchronously or asynchronously.

#### Parameters

##### value

`boolean` = `true`

Set true for sync, false for async (default is true).

#### Returns

`this`

The current Pipeline instance.

***

### then()

> **then**(`destination`): `R` \| `Promise`\<`R`\>

Defined in: [Pipeline.ts:135](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L135)

Run the pipeline with a final destination callback.

#### Parameters

##### destination

[`PipeExecutor`](../../definitions/type-aliases/PipeExecutor.md)\<`T`, `R`\>

The final function to execute.

#### Returns

`R` \| `Promise`\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

***

### thenReturn()

> **thenReturn**(): `R` \| `Promise`\<`R`\>

Defined in: [Pipeline.ts:149](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L149)

Run the pipeline and return the result.

#### Returns

`R` \| `Promise`\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

***

### through()

> **through**(`pipes`): `this`

Defined in: [Pipeline.ts:88](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L88)

Set the pipes for the pipeline.

#### Parameters

##### pipes

[`MixedPipe`](../../definitions/type-aliases/MixedPipe.md)[]

Array of pipes or MetaPipe instances.

#### Returns

`this`

The current Pipeline instance.

***

### via()

> **via**(`method`): `this`

Defined in: [Pipeline.ts:113](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L113)

Set the method to call on each pipe.

#### Parameters

##### method

`string`

The method name to use on each pipe.

#### Returns

`this`

The current Pipeline instance.

***

### create()

> `static` **create**\<`T`, `R`\>(`options`?): [`Pipeline`](Pipeline.md)\<`T`, `R`\>

Defined in: [Pipeline.ts:41](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/Pipeline.ts#L41)

Create a pipeline instance.

#### Type Parameters

• **T** *extends* [`Passable`](../../definitions/type-aliases/Passable.md)

• **R** *extends* [`Passable`](../../definitions/type-aliases/Passable.md) = `T`

#### Parameters

##### options?

[`PipelineOptions`](../../definitions/interfaces/PipelineOptions.md)\<`T`, `R`\>

Optional Pipeline options.

#### Returns

[`Pipeline`](Pipeline.md)\<`T`, `R`\>

The pipeline instance.
