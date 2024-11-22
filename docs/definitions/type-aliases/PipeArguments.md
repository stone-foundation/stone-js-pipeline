[**Pipeline Documentation v0.0.44**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.44](../../modules.md) / [definitions](../README.md) / PipeArguments

# Type Alias: PipeArguments\<T, R\>

> **PipeArguments**\<`T`, `R`\>: (`T` \| [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\> \| `unknown`[])[]

Represents the arguments passed to a pipe execution function.

The array can include:
- `T`: The passable value (of type `Passable`).
- `PipeExecutor<T, R>`: The executor function for the pipe.
- `unknown[]`: Additional arguments that might be used during execution.

## Type Parameters

• **T** *extends* [`Passable`](Passable.md)

The type of the passable object.

• **R** *extends* [`Passable`](Passable.md) \| `T` = `T`

The type of the return value from the pipeline execution, defaulting to `T`.

## Defined in

[definitions.ts:30](https://github.com/stonemjs/pipeline/blob/d0c57676782f8e1afbbfb26e407906157446f32f/src/definitions.ts#L30)
