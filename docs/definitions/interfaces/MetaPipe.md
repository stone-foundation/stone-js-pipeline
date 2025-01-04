[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [definitions](../README.md) / MetaPipe

# Interface: MetaPipe

Defined in: [definitions.ts:96](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L96)

Represents a MetaPipe configuration item, with a pipe, parameters, and priority level.

A configuration object used for managing pipes in the pipeline.

## Properties

### params?

> `optional` **params**: `unknown`[]

Defined in: [definitions.ts:100](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L100)

An optional array of parameters to pass to the pipe.

***

### pipe

> **pipe**: [`Pipe`](../type-aliases/Pipe.md)

Defined in: [definitions.ts:98](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L98)

The pipe to execute, which can be a function or a string identifier.

***

### priority?

> `optional` **priority**: `number`

Defined in: [definitions.ts:102](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L102)

An optional priority level of the pipe.
