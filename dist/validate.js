"use strict";
exports.__esModule = true;
/**
 * @module Utility
 */
var validate = /** @class */ (function () {
    function validate() {
    }
    /**
     *
     * @param input Input string to check length on
     * @param min minimum character in string
     * @param max maximum character in string
     */
    validate.isLength = function (input, min, max) {
        return input.length >= min && input.length <= max;
    };
    validate.isEmail = function (input) {
        return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])+/
            .test(input.toLowerCase().trim());
    };
    validate.isAlphanumeric = function (input) {
        return /^[a-zA-Z0-9]{0,}$/
            .test(input.toLowerCase().trim());
    };
    validate.isNumeric = function (input) {
        return /^[0-9]{1,}$/
            .test(input);
    };
    return validate;
}());
exports.validate = validate;
