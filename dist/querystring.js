"use strict";
exports.__esModule = true;
var querystring = /** @class */ (function () {
    function querystring() {
    }
    /**
     * convert object to querystring
     * @param inputObject javascript object to be converted.
     */
    querystring.fromObject = function (inputObject) {
        var str = [];
        for (var p in inputObject)
            if (inputObject.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(inputObject[p]));
            }
        return str.join("&");
    };
    /**
     * convert querystring to object
     * @param querystring complete url or just querystring part
     */
    querystring.toObject = function (querystring) {
        var obj = {};
        querystring.split('?').reverse()[0].replace(/([^=&]+)=([^&]*)/g, function (m, key, value) {
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
            return '';
        });
        return obj;
    };
    return querystring;
}());
exports.querystring = querystring;
