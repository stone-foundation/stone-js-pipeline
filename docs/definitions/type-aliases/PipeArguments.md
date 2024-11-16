[**Pipeline Documentation v0.0.42**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.42](../../modules.md) / [definitions](../README.md) / PipeArguments

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

[definitions.ts:31](https://github.com/stonemjs/pipeline/blob/6aa3c0d02a33fc0aff536e37f45d10dc083a2448/src/definitions.ts#L31)
