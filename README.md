
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/m-esm/serendip/graphs/commit-activity)
[![Website shields.io](https://img.shields.io/website-up-down-green-red/http/shields.io.svg)](https://serendip.agency/)
![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)
![TypeScript](https://badges.frapsoft.com/typescript/love/typescript.svg?v=101)


![SF](https://raw.githubusercontent.com/serendip-agency/serendip-utility/master/readme_icon.png " ")

## Serendip Utility
Utility package used in serendip repositories.

### Installing
Assuming that you have already installed Nodejs, you can start installing Serendip with NPM.
Open your Terminal/Command Prompt(CMD) and write:

```
npm install serendip --save
```

### Example

```javascript

var su = require('serendip-utility');

console.log(su.text.replacePersianDigitsWithEnglish("۱۲۳۴۵۶۷۸۹۰"))

// should return 1234567890

```

### Methods
 * [arrays.toposort(edges)](doc/classes/utility.arrays.md#toposort)
 * [functions.args(func)](doc/classes/utility.functions.md#args)
 * [querystring.fromObject(inputObject)](doc/classes/utility.querystring.md#fromobject)
 * [querystring.toObject(querystring)](doc/classes/utility.querystring.md#toobject)
 * [text.reverse(input)](doc/classes/utility.text.md#reverse)
 * [text.replaceArabicCharWithPersian(value)](doc/classes/utility.text.md#replacearabiccharwithpersian)
 * [text.replacePersianDigitsWithEnglish(string)](doc/classes/utility.text.md#replacepersiandigitswithenglish)
 * [text.replaceEnglishDigitsWithPersian(input)](doc/classes/utility.text.md#replaceenglishdigitswithpersian)
 * [text.switchPersianKeyToEnglish(value)](doc/classes/utility.text.md#switchpersiankeytoenglish)
 * [text.switchEnglishKeyToPersian(value)](doc/classes/utility.text.md#switchenglishkeytopersian)
 * [text.fixPersianHalfSpace(value)](doc/classes/utility.text.md#fixpersianhalfspace)
 * [text.replaceArabicDigitsWithPersian(value)](doc/classes/utility.text.md#replacearabicdigitswithpersian)
 * [text.replaceArabicDigitsWithEnglish(value)](doc/classes/utility.text.md#replacearabicdigitswithenglish)
 * [text.capitalizeFirstLetter(string)](doc/classes/utility.text.md#capitalizefirstletter)
 * [text.randomString(length,chars)](doc/classes/utility.text.md#randomstring)
 * [text.randomAsciiString(length)](doc/classes/utility.text.md#randomasciistring)
 * [text.randomNumberString(length)](doc/classes/utility.text.md#randomnumberstring)
 * [text.randomAccessToken()](doc/classes/utility.text.md#randomaccesstoken)
 * [validate.isLength(input,min,max)](doc/classes/utility.validate.md#islength)
 * [validate.isEmail(input)](doc/classes/utility.validate.md#isemail)
 * [validate.isAlphanumeric(input)](doc/classes/utility.validate.md#isalphanumeric)
 * [validate.isNumeric(input)](doc/classes/utility.validate.md#isnumeric)
 * [objects.memorySizeOf(obj)](doc/classes/utility.objects.md#memorysizeof)




### Code Documentation
This documents are auto generated from typescript source using [typedoc](https://github.com/TypeStrong/typedoc)pac
* [text](doc/classes/utility.text.md#methods)
* [querystring](doc/classes/utility.querystring.md#methods)
* [validate](doc/classes/utility.validate.md#methods)
* [arrays](doc/classes/utility.arrays.md#methods)
* [functions](doc/classes/utility.functions.md#methods)
* [objects](doc/classes/utility.objects.md#methods)


![_](https://serendip.agency/assets/svg/about/about-7.svg "")
 
