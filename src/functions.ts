export class functions {
  /**
   * returns array of given function arguments
   * @argument func : input as function or function as string
   *  */

  static args(func: Function | string): string[] {
    return (func || "")
      .toString()
      .replace(/[/][/].*$/gm, "") // strip single-line comments
      .replace(/\s+/g, "") // strip white space
      .replace(/[/][*][^/*]*[*][/]/g, "") // strip multi-line comments
      .split("){", 1)[0]
      .replace(/^[^(]*[(]/, "") // extract the parameters
      .replace(/=[^,]+/g, "") // strip any ES6 defaults
      .split(",")
      .filter(Boolean); // split & filter [""]
  }
}
