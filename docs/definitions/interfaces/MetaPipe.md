[**Pipeline Documentation v0.0.4**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.4](../../modules.md) / [definitions](../README.md) / MetaPipe

# Interface: MetaPipe

Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.

A configuration object used for managing pipes in the pipeline.

## Properties

### params?

> `optional` **params**: `unknown`[]

An optional array of parameters to pass to the pipe.

#### Defined in

[definitions.ts:105](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/definitions.ts#L105)

***

### pipe

> **pipe**: [`Pipe`](../type-aliases/Pipe.md)

The pipe to execute, which can be a function or a string identifier.

#### Defined in

[definitions.ts:103](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/definitions.ts#L103)

***

### priority?

> `optional` **priority**: `number`

An optional priority level of the pipe.

#### Defined in

[definitions.ts:107](https://github.com/stonemjs/pipeline/blob/c58d6a845c753f59fdcbc14c7c929ef7d9fab2e5/src/definitions.ts#L107)
