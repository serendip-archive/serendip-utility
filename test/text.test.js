var assert = require("assert");
var text = require("..").text;

describe("text utility", () => {
  it("should return 1234567890", () => {
    assert.equal(
      text.replacePersianDigitsWithEnglish("۱۲۳۴۵۶۷۸۹۰"),
      "1234567890"
    );
  });

  it("should return ۱۲۳۴۵۶۷۸۹۰", () => {
    assert.equal(
      text.replaceEnglishDigitsWithPersian("1234567890"),
      "۱۲۳۴۵۶۷۸۹۰"
    );
  });

  it("should return same length on randomNumber() " + 1e6 + " times", () => {
    for (let i = 0; i < 1e6; i++) {
      assert.equal(text.randomNumberString(6).length, 6);
    }
  });

  it(
    "should return same length on randomAsciiString() " + 1e6 + " times",
    () => {
      for (let i = 0; i < 1e6; i++) {
        assert.equal(text.randomAsciiString(6).length, 6);
      }
    }
  );
});
