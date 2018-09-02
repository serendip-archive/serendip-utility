"use strict";
exports.__esModule = true;
var text = /** @class */ (function () {
    function text() {
    }
    text.reverse = function (input) {
        return input.split('').reverse().join('');
    };
    text.replacePersianDigitsWithEnglish = function (string) {
        return string.replace(/[\u0660-\u0669]/g, function (c) {
            return c.charCodeAt(0) - 0x0660;
        }).replace(/[\u06f0-\u06f9]/g, function (c) {
            return c.charCodeAt(0) - 0x06f0;
        });
    };
    text.replaceEnglishDigitsWithPersian = function (input) {
        if (!input)
            input = '';
        var convert = function (a) {
            return ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'][a];
        };
        return input.toString().replace(/\d/g, convert);
    };
    return text;
}());
exports.text = text;
