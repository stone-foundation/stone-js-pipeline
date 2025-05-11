[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / isConstructor

# Function: isConstructor()

> **isConstructor**\<`ClassType`\>(`value`): `value is (args: any[]) => ClassType`

Defined in: [utils.ts:38](https://github.com/stonemjs/pipeline/blob/c1939f54bb171590323c05e0cd983f2249e30e00/src/utils.ts#L38)

Checks if the given value is a constructor function.

## Type Parameters

### ClassType

`ClassType` = `any`

## Parameters

### value

`unknown`

The value to be checked.

## Returns

`value is (args: any[]) => ClassType`

True if the value is a constructor function, false otherwise.
