[Serendip Utility](../README.md) > [Utility](../modules/utility.md) > [text](../classes/utility.text.md)

# Class: text

## Hierarchy

**text**

## Index

### Properties

* [arabicChars](utility.text.md#arabicchars)
* [arabicNumbers](utility.text.md#arabicnumbers)
* [englishKeyChar](utility.text.md#englishkeychar)
* [englishNumbers](utility.text.md#englishnumbers)
* [persianChars](utility.text.md#persianchars)
* [persianKeyChar](utility.text.md#persiankeychar)
* [persianNumbers](utility.text.md#persiannumbers)

### Methods

* [capitalizeFirstLetter](utility.text.md#capitalizefirstletter)
* [fixPersianHalfSpace](utility.text.md#fixpersianhalfspace)
* [randomAccessToken](utility.text.md#randomaccesstoken)
* [randomAsciiString](utility.text.md#randomasciistring)
* [randomNumberString](utility.text.md#randomnumberstring)
* [randomString](utility.text.md#randomstring)
* [replaceArabicCharWithPersian](utility.text.md#replacearabiccharwithpersian)
* [replaceArabicDigitsWithEnglish](utility.text.md#replacearabicdigitswithenglish)
* [replaceArabicDigitsWithPersian](utility.text.md#replacearabicdigitswithpersian)
* [replaceEnglishDigitsWithPersian](utility.text.md#replaceenglishdigitswithpersian)
* [replacePersianDigitsWithEnglish](utility.text.md#replacepersiandigitswithenglish)
* [reverse](utility.text.md#reverse)
* [switchEnglishKeyToPersian](utility.text.md#switchenglishkeytopersian)
* [switchPersianKeyToEnglish](utility.text.md#switchpersiankeytoenglish)

---

## Properties

<a id="arabicchars"></a>

### `<Static>` arabicChars

**● arabicChars**: *`string`[]* =  [
    "ي",
    "ك",
    "‍",
    "دِ",
    "بِ",
    "زِ",
    "ذِ",
    "ِشِ",
    "ِسِ",
    "ى"
  ]

*Defined in [text.ts:8](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L8)*

___
<a id="arabicnumbers"></a>

### `<Static>` arabicNumbers

**● arabicNumbers**: *`string`[]* =  ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"]

*Defined in [text.ts:5](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L5)*

___
<a id="englishkeychar"></a>

### `<Static>` englishKeyChar

**● englishKeyChar**: *`string`[]* =  [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "[",
    "]",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    ";",
    "'",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    ",",
    "?"
  ]

*Defined in [text.ts:55](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L55)*

___
<a id="englishnumbers"></a>

### `<Static>` englishNumbers

**● englishNumbers**: *`string`[]* =  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

*Defined in [text.ts:7](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L7)*

___
<a id="persianchars"></a>

### `<Static>` persianChars

**● persianChars**: *`string`[]* =  ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "ی"]

*Defined in [text.ts:20](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L20)*

___
<a id="persiankeychar"></a>

### `<Static>` persianKeyChar

**● persianKeyChar**: *`string`[]* =  [
    "ض",
    "ص",
    "ث",
    "ق",
    "ف",
    "غ",
    "ع",
    "ه",
    "خ",
    "ح",
    "ج",
    "چ",
    "ش",
    "س",
    "ی",
    "ب",
    "ل",
    "ا",
    "ت",
    "ن",
    "م",
    "ک",
    "گ",
    "ظ",
    "ط",
    "ز",
    "ر",
    "ذ",
    "د",
    "پ",
    "و",
    "؟"
  ]

*Defined in [text.ts:21](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L21)*

___
<a id="persiannumbers"></a>

### `<Static>` persianNumbers

**● persianNumbers**: *`string`[]* =  ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"]

*Defined in [text.ts:6](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L6)*

___

## Methods

<a id="capitalizefirstletter"></a>

### `<Static>` capitalizeFirstLetter

▸ **capitalizeFirstLetter**(string: *`any`*): `any`

*Defined in [text.ts:215](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L215)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| string | `any` |

**Returns:** `any`

___
<a id="fixpersianhalfspace"></a>

### `<Static>` fixPersianHalfSpace

▸ **fixPersianHalfSpace**(value: *`any`*): `any`

*Defined in [text.ts:160](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L160)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___
<a id="randomaccesstoken"></a>

### `<Static>` randomAccessToken

▸ **randomAccessToken**(): `string`

*Defined in [text.ts:251](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L251)*

Sync

**Returns:** `string`

___
<a id="randomasciistring"></a>

### `<Static>` randomAsciiString

▸ **randomAsciiString**(length: *`any`*): `string`

*Defined in [text.ts:238](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L238)*

Sync

**Parameters:**

| Name | Type |
| ------ | ------ |
| length | `any` |

**Returns:** `string`

___
<a id="randomnumberstring"></a>

### `<Static>` randomNumberString

▸ **randomNumberString**(length: *`any`*): `string`

*Defined in [text.ts:246](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L246)*

Sync

**Parameters:**

| Name | Type |
| ------ | ------ |
| length | `any` |

**Returns:** `string`

___
<a id="randomstring"></a>

### `<Static>` randomString

▸ **randomString**(length: *`number`*, chars: *`string`*): `string`

*Defined in [text.ts:219](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L219)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| length | `number` |
| chars | `string` |

**Returns:** `string`

___
<a id="replacearabiccharwithpersian"></a>

### `<Static>` replaceArabicCharWithPersian

▸ **replaceArabicCharWithPersian**(value: *`any`*): `any`

*Defined in [text.ts:95](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L95)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___
<a id="replacearabicdigitswithenglish"></a>

### `<Static>` replaceArabicDigitsWithEnglish

▸ **replaceArabicDigitsWithEnglish**(value: *`any`*): `any`

*Defined in [text.ts:196](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L196)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___
<a id="replacearabicdigitswithpersian"></a>

### `<Static>` replaceArabicDigitsWithPersian

▸ **replaceArabicDigitsWithPersian**(value: *`any`*): `any`

*Defined in [text.ts:177](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L177)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___
<a id="replaceenglishdigitswithpersian"></a>

### `<Static>` replaceEnglishDigitsWithPersian

▸ **replaceEnglishDigitsWithPersian**(input: *`any`*): `any`

*Defined in [text.ts:119](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L119)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `any` |

**Returns:** `any`

___
<a id="replacepersiandigitswithenglish"></a>

### `<Static>` replacePersianDigitsWithEnglish

▸ **replacePersianDigitsWithEnglish**(string: *`any`*): `any`

*Defined in [text.ts:109](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L109)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| string | `any` |

**Returns:** `any`

___
<a id="reverse"></a>

### `<Static>` reverse

▸ **reverse**(input: *`string`*): `string`

*Defined in [text.ts:89](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L89)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| input | `string` |

**Returns:** `string`

___
<a id="switchenglishkeytopersian"></a>

### `<Static>` switchEnglishKeyToPersian

▸ **switchEnglishKeyToPersian**(value: *`any`*): `any`

*Defined in [text.ts:143](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L143)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___
<a id="switchpersiankeytoenglish"></a>

### `<Static>` switchPersianKeyToEnglish

▸ **switchPersianKeyToEnglish**(value: *`any`*): `any`

*Defined in [text.ts:128](https://github.com/m-esm/serendip-utility/blob/bc9ae69/src/text.ts#L128)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `any` |

**Returns:** `any`

___

