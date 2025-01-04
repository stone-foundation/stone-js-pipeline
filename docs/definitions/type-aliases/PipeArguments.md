[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [definitions](../README.md) / PipeArguments

# Type Alias: PipeArguments\<T, R\>

> **PipeArguments**\<`T`, `R`\>: (`T` \| [`PipeExecutor`](PipeExecutor.md)\<`T`, `R`\> \| `unknown`[])[]

Defined in: [definitions.ts:30](https://github.com/stonemjs/pipeline/blob/25f97e5694101638ed81fbfb328425b2c68320f6/src/definitions.ts#L30)

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
