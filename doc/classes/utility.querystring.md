[Serendip Utility](../README.md) > [Utility](../modules/utility.md) > [querystring](../classes/utility.querystring.md)

# Class: querystring

## Hierarchy

**querystring**

## Index

### Methods

* [fromObject](utility.querystring.md#fromobject)
* [toObject](utility.querystring.md#toobject)

---

## Methods

<a id="fromobject"></a>

### `<Static>` fromObject

▸ **fromObject**(inputObject: *`any`*): `string`

*Defined in [querystring.ts:10](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/querystring.ts#L10)*

convert object to querystring

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| inputObject | `any` |  javascript object to be converted. |

**Returns:** `string`

___
<a id="toobject"></a>

### `<Static>` toObject

▸ **toObject**(querystring: *`string`*): `any`

*Defined in [querystring.ts:23](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/querystring.ts#L23)*

convert querystring to object

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| querystring | `string` |  complete url or just querystring part |

**Returns:** `any`

___

