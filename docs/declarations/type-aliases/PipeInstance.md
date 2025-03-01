[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [declarations](../README.md) / PipeInstance

# Type Alias: PipeInstance\<T, R\>

> **PipeInstance**\<`T`, `R`\>: [`PipeDefaultInstance`](../interfaces/PipeDefaultInstance.md)\<`T`, `R`\> \| [`PipeCustomInstance`](../interfaces/PipeCustomInstance.md)\<`T`, `R`\>

Defined in: [declarations.ts:101](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/declarations.ts#L101)

Represents a pipe instance that contains different pipe functions.

## Type Parameters

• **T** = `unknown`

The type of the passable object.

• **R** = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

An object representing a set of functions used as part of the pipeline.
The keys represent function names, and the values are functions that take specific arguments.
