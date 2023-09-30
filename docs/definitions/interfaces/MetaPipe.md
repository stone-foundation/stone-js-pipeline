[**Pipeline Documentation v0.0.1**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.1](../../modules.md) / [definitions](../README.md) / MetaPipe

# Interface: MetaPipe

Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.

A configuration object used for managing pipes in the pipeline.

## Properties

### params?

> `optional` **params**: `unknown`[]

An optional array of parameters to pass to the pipe.

#### Defined in

[definitions.ts:95](https://github.com/stonemjs/pipeline/blob/5275b88fe9f1da6af3b6cfe9c64d0c6af6f5eb08/src/definitions.ts#L95)

***

### pipe

> **pipe**: [`Pipe`](../type-aliases/Pipe.md)

The pipe to execute, which can be a function or a string identifier.

#### Defined in

[definitions.ts:93](https://github.com/stonemjs/pipeline/blob/5275b88fe9f1da6af3b6cfe9c64d0c6af6f5eb08/src/definitions.ts#L93)

***

### priority?

> `optional` **priority**: `number`

An optional priority level of the pipe.

#### Defined in

[definitions.ts:97](https://github.com/stonemjs/pipeline/blob/5275b88fe9f1da6af3b6cfe9c64d0c6af6f5eb08/src/definitions.ts#L97)
