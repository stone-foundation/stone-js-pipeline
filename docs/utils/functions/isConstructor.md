[**Pipeline Documentation**](../../README.md)

***

[Pipeline Documentation](../../README.md) / [utils](../README.md) / isConstructor

# Function: isConstructor()

> **isConstructor**\<`ClassType`\>(`value`): `value is (args: any[]) => ClassType`

Defined in: [utils.ts:38](https://github.com/stonemjs/pipeline/blob/2eff0e8e1fb564de78ed833206823c91f7932eb4/src/utils.ts#L38)

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
