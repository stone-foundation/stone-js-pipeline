[**Pipeline Documentation v0.0.46**](../../README.md)

***

[Pipeline Documentation](../../modules.md) / [utils](../README.md) / isConstructor

# Function: isConstructor()

> **isConstructor**\<`ClassType`\>(`value`): `value is (args: any[]) => ClassType`

Defined in: [utils.ts:38](https://github.com/stonemjs/pipeline/blob/437717c2a315db06047331ae86596a6933a8a199/src/utils.ts#L38)

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
