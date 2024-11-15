[**Pipeline Documentation v0.0.41**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.41](../../modules.md) / [definitions](../README.md) / MetaPipe

# Interface: MetaPipe

Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.

A configuration object used for managing pipes in the pipeline.

## Properties

### params?

> `optional` **params**: `unknown`[]

An optional array of parameters to pass to the pipe.

#### Defined in

[definitions.ts:105](https://github.com/stonemjs/pipeline/blob/cd2c1fe6f2982b63b3356203b0c87edf8640b155/src/definitions.ts#L105)

***

### pipe

> **pipe**: [`Pipe`](../type-aliases/Pipe.md)

The pipe to execute, which can be a function or a string identifier.

#### Defined in

[definitions.ts:103](https://github.com/stonemjs/pipeline/blob/cd2c1fe6f2982b63b3356203b0c87edf8640b155/src/definitions.ts#L103)

***

### priority?

> `optional` **priority**: `number`

An optional priority level of the pipe.

#### Defined in

[definitions.ts:107](https://github.com/stonemjs/pipeline/blob/cd2c1fe6f2982b63b3356203b0c87edf8640b155/src/definitions.ts#L107)
