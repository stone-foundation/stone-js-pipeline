[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isConstructor

# Function: isConstructor()

> **isConstructor**\<`ClassType`\>(`value`): `value is (args: any[]) => ClassType`

Defined in: [utils.ts:38](https://github.com/stonemjs/pipeline/blob/bdafb2a2f2d57df256cc97fee41b6f9b9fdd69f9/src/utils.ts#L38)

Checks if the given value is a constructor function.

## Type Parameters

• **ClassType** = `any`

## Parameters

### value

`unknown`

The value to be checked.

## Returns

`value is (args: any[]) => ClassType`

True if the value is a constructor function, false otherwise.
