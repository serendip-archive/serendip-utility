/**
 * @module Utility
 */

 export class objects {
  /**
   * returns size of obj in bytes
   * @param obj any object
   */
  static memorySizeOf(obj: any): number {
    var bytes = 0;

    const sizeOf = (obj: any): number => {
      if (obj !== null && obj !== undefined) {
        switch (typeof obj) {
          case "number":
            bytes += 8;
            break;
          case "string":
            bytes += obj.length * 2;
            break;
          case "boolean":
            bytes += 4;
            break;
          case "object":
            var objClass = Object.prototype.toString.call(obj).slice(8, -1);
            if (objClass === "Object" || objClass === "Array") {
              for (var key in obj) {
                if (!obj.hasOwnProperty(key)) continue;
                sizeOf(obj[key]);
              }
            } else bytes += obj.toString().length * 2;
            break;
        }
      }
      return bytes;
    };

    return bytes;
  }
}
