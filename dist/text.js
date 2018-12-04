"use strict";
exports.__esModule = true;
var text = /** @class */ (function () {
    function text() {
    }
    text.reverse = function (input) {
        return input
            .split("")
            .reverse()
            .join("");
    };
    text.replaceArabicCharWithPersian = function (value) {
        if (!value) {
            return "";
        }
        for (var i = 0, charsLen = text.arabicChars.length; i < charsLen; i++) {
            value = value.replace(new RegExp(text.arabicChars[i], "g"), text.persianChars[i]);
        }
        return value;
    };
    text.replacePersianDigitsWithEnglish = function (string) {
        return string
            .replace(/[\u0660-\u0669]/g, function (c) {
            return c.charCodeAt(0) - 0x0660;
        })
            .replace(/[\u06f0-\u06f9]/g, function (c) {
            return c.charCodeAt(0) - 0x06f0;
        });
    };
    text.replaceEnglishDigitsWithPersian = function (input) {
        if (typeof input == "undefined")
            input = "";
        var convert = function (a) {
            return ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"][a];
        };
        return input.toString().replace(/\d/g, convert);
    };
    text.switchPersianKeyToEnglish = function (value) {
        if (!value) {
            return;
        }
        for (var i = 0, charsLen = text.persianKeyChar.length; i < charsLen; i++) {
            value = value.replace(new RegExp(text.persianKeyChar[i], "g"), text.englishKeyChar[i]);
        }
        return value;
    };
    text.switchEnglishKeyToPersian = function (value) {
        if (!value) {
            return;
        }
        for (var i = 0, charsLen = text.englishKeyChar.length; i < charsLen; i++) {
            try {
                value = value.replace(new RegExp(text.englishKeyChar[i], "g"), text.persianKeyChar[i]);
            }
            catch (error) {
            }
        }
        return value;
    };
    text.fixPersianHalfSpace = function (value) {
        if (!value) {
            return;
        }
        var pattern;
        // Replace Zero-width non-joiner between persian MI.
        pattern = /((\s\u0645\u06CC)+( )+([\u0600-\u06EF]{1,}){1,})/g;
        value = value.replace(new RegExp(pattern), "$2\u200C$4");
        // Replace Zero-width non-joiner between perisan De-Yii.
        pattern = /(([\u0600-\u06EF]{1,})+( )+(ای|ایی|اند|ایم|اید|ام){1})/g;
        value = value.replace(new RegExp(pattern), "$2\u200C$4");
        return value;
    };
    text.replaceArabicDigitsWithPersian = function (value) {
        if (!value) {
            return;
        }
        value = value.toString();
        for (var i = 0, numbersLen = text.arabicNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(text.arabicNumbers[i], "g"), text.persianNumbers[i]);
        }
        return value;
    };
    text.replaceArabicDigitsWithEnglish = function (value) {
        if (!value) {
            return;
        }
        value = value.toString();
        for (var i = 0, numbersLen = text.arabicNumbers.length; i < numbersLen; i++) {
            value = value.replace(new RegExp(text.arabicNumbers[i], "g"), text.englishNumbers[i]);
        }
        return value;
    };
    text.arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
    text.persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
    text.englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    text.arabicChars = [
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
    ];
    text.persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "ی"];
    text.persianKeyChar = [
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
    ];
    text.englishKeyChar = [
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
    ];
    return text;
}());
exports.text = text;
