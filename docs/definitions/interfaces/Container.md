[**Pipeline Documentation v0.0.1**](../../README.md) • **Docs**

***

[Pipeline Documentation v0.0.1](../../modules.md) / [definitions](../README.md) / Container

# Interface: Container

Represents a container that resolves dependencies.

## Template

The type of the resolved object.

A container responsible for dependency injection, providing resolved instances by key.

## Properties

### resolve()

> **resolve**: \<`T`\>(`key`) => `T`

Resolves a dependency by key or constructor function.

#### Type Parameters

• **T**

#### Parameters

• **key**: `string` \| `Function`

The key or constructor to resolve.

#### Returns

`T`

The resolved object instance.

#### Defined in

[definitions.ts:83](https://github.com/stonemjs/pipeline/blob/5275b88fe9f1da6af3b6cfe9c64d0c6af6f5eb08/src/definitions.ts#L83)
