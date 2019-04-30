/**
 * @module Utility
 */
export class querystring {

    /**
     * convert object to querystring
     * @param inputObject javascript object to be converted.
     */
    public static fromObject(inputObject: any): string {
        var str = [];
        for (var p in inputObject)
            if (inputObject.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(inputObject[p]));
            }
        return str.join("&");
    }

    /**
     * convert querystring to object
     * @param querystring complete url or just querystring part
     */
    public static toObject(querystring: string): any {
        var obj = {};
        querystring.split('?').reverse()[0].replace(/([^=&]+)=([^&]*)/g, (m, key, value) => {
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
            return '';
        });
        return obj;
    }
}