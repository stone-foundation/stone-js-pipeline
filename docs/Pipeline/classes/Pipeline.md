[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [Pipeline](../README.md) / Pipeline

# Class: Pipeline\<T, R, Args\>

Defined in: [Pipeline.ts:31](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L31)

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

Defined in: [Pipeline.ts:68](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L68)

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

Defined in: [Pipeline.ts:83](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L83)

Set the default priority for pipes in the pipeline.

#### Parameters

##### value

`number`

The priority value to set.

#### Returns

`this`

The current Pipeline instance.

***

### on()

> **on**(`name`, `listener`): `this`

Defined in: [Pipeline.ts:158](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L158)

Add a hook to the pipeline.

#### Parameters

##### name

[`HookName`](../../declarations/type-aliases/HookName.md)

The name of the hook.

##### listener

The hook listener function.

[`PipelineHookListener`](../../declarations/type-aliases/PipelineHookListener.md)\<`T`, `R`, `Args`\> | [`PipelineHookListener`](../../declarations/type-aliases/PipelineHookListener.md)\<`T`, `R`, `Args`\>[]

#### Returns

`this`

The current Pipeline instance.

***

### pipe()

> **pipe**(...`pipe`): `this`

Defined in: [Pipeline.ts:125](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L125)

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

Defined in: [Pipeline.ts:94](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L94)

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

Defined in: [Pipeline.ts:146](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L146)

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

> **then**(`destination`): [`Promiseable`](../../declarations/type-aliases/Promiseable.md)\<`R`\>

Defined in: [Pipeline.ts:171](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L171)

Run the pipeline with a final destination callback.

#### Parameters

##### destination

[`PipeExecutor`](../../declarations/type-aliases/PipeExecutor.md)\<`T`, `R`\>

The final function to execute.

#### Returns

[`Promiseable`](../../declarations/type-aliases/Promiseable.md)\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

***

### thenReturn()

> **thenReturn**(): [`Promiseable`](../../declarations/type-aliases/Promiseable.md)\<`R`\>

Defined in: [Pipeline.ts:189](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L189)

Run the pipeline and return the result.

#### Returns

[`Promiseable`](../../declarations/type-aliases/Promiseable.md)\<`R`\>

The result of the pipeline, either synchronously or as a Promise.

***

### through()

> **through**(...`pipes`): `this`

Defined in: [Pipeline.ts:105](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L105)

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

Defined in: [Pipeline.ts:135](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L135)

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

Defined in: [Pipeline.ts:59](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/Pipeline.ts#L59)

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
