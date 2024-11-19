[**Pipeline Documentation v0.0.44**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.44](../../modules.md) / [definitions](../README.md) / MetaPipe

# Interface: MetaPipe

Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.

A configuration object used for managing pipes in the pipeline.

## Properties

### params?

> `optional` **params**: `unknown`[]

An optional array of parameters to pass to the pipe.

#### Defined in

[definitions.ts:100](https://github.com/stonemjs/pipeline/blob/cb206a59f3858db33e7d57a2dba74356bb8f0bc4/src/definitions.ts#L100)

***

### pipe

> **pipe**: [`Pipe`](../type-aliases/Pipe.md)

The pipe to execute, which can be a function or a string identifier.

#### Defined in

[definitions.ts:98](https://github.com/stonemjs/pipeline/blob/cb206a59f3858db33e7d57a2dba74356bb8f0bc4/src/definitions.ts#L98)

***

### priority?

> `optional` **priority**: `number`

An optional priority level of the pipe.

#### Defined in

[definitions.ts:102](https://github.com/stonemjs/pipeline/blob/cb206a59f3858db33e7d57a2dba74356bb8f0bc4/src/definitions.ts#L102)
