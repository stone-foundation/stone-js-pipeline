[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [Pipeline](../README.md) / Pipeline

# Class: Pipeline\<T, R, Args\>

Defined in: [Pipeline.ts:14](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L14)

Class representing a Pipeline.

## Type Parameters

• **T** = `unknown`

The type of the passable object in the pipeline.

• **R** = `T`

The type of the return value from the pipeline execution.

This class is responsible for managing and executing a series of operations
on a set of passable values through multiple configurable pipes.

• **Args** *extends* `any`[] = `any`[]

## Constructors

### new Pipeline()

> `protected` **new Pipeline**\<`T`, `R`, `Args`\>(`options`?): [`Pipeline`](Pipeline.md)\<`R`, `Args`\>

Defined in: [Pipeline.ts:48](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L48)

Initialize a new Pipeline instance.

#### Parameters

##### options?

[`PipelineOptions`](../../declarations/interfaces/PipelineOptions.md)\<`T`, `R`, `Args`\>

Optional Pipeline options.

#### Returns

[`Pipeline`](Pipeline.md)\<`R`, `Args`\>

## Methods

### defaultPriority()

> **defaultPriority**(`value`): `this`

Defined in: [Pipeline.ts:62](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L62)

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

> **pipe**(...`pipe`): `this`

Defined in: [Pipeline.ts:103](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L103)

Add additional pipes to the pipeline.

#### Parameters

##### pipe

...[`MixedPipe`](../../declarations/type-aliases/MixedPipe.md)\<`T`, `R`, `Args`\>[]

A single pipe or an array of pipes.

#### Returns

`this`

The current Pipeline instance.

***

### send()

> **send**(`passable`): `this`

Defined in: [Pipeline.ts:73](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L73)

Set the passable objects being sent through the pipeline.

#### Parameters

##### passable

`T`

The object to pass through the pipeline.

#### Returns

`this`

The current Pipeline instance.

***

### sync()

> **sync**(`value`): `this`

Defined in: [Pipeline.ts:124](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L124)

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

Defined in: [Pipeline.ts:135](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L135)

Run the pipeline with a final destination callback.

#### Parameters

##### destination

[`PipeExecutor`](../../declarations/type-aliases/PipeExecutor.md)\<`T`, `R`\>

The final function to execute.

#### Returns

`R` \| `Promise`\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

***

### thenReturn()

> **thenReturn**(): `R` \| `Promise`\<`R`\>

Defined in: [Pipeline.ts:153](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L153)

Run the pipeline and return the result.

#### Returns

`R` \| `Promise`\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

***

### through()

> **through**(...`pipes`): `this`

Defined in: [Pipeline.ts:84](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L84)

Set the pipes for the pipeline.

#### Parameters

##### pipes

...[`MixedPipe`](../../declarations/type-aliases/MixedPipe.md)\<`T`, `R`, `Args`\>[]

The pipes or MetaPipe instances.

#### Returns

`this`

The current Pipeline instance.

***

### via()

> **via**(`method`): `this`

Defined in: [Pipeline.ts:113](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L113)

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

> `static` **create**\<`T`, `R`, `Args`\>(`options`?): [`Pipeline`](Pipeline.md)\<`T`, `R`\>

Defined in: [Pipeline.ts:39](https://github.com/stonemjs/pipeline/blob/c8a1fcbfdda4004779e43e603ed49dbe9ca9323f/src/Pipeline.ts#L39)

Create a pipeline instance.

#### Type Parameters

• **T** = `unknown`

• **R** = `T`

• **Args** *extends* `any`[] = `any`[]

#### Parameters

##### options?

[`PipelineOptions`](../../declarations/interfaces/PipelineOptions.md)\<`T`, `R`, `Args`\>

Optional Pipeline options.

#### Returns

[`Pipeline`](Pipeline.md)\<`T`, `R`\>

The pipeline instance.
