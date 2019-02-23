export class text {
  static arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"];
  static persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"];
  static englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  static arabicChars = [
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
  static persianChars = ["ی", "ک", "", "د", "ب", "ز", "ذ", "ش", "س", "ی"];
  static persianKeyChar = [
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
  static englishKeyChar = [
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
  static reverse(input: string) {
    return input
      .split("")
      .reverse()
      .join("");
  }
  static replaceArabicCharWithPersian(value) {
    if (!value) {
      return "";
    }

    for (var i = 0, charsLen = text.arabicChars.length; i < charsLen; i++) {
      value = value.replace(
        new RegExp(text.arabicChars[i], "g"),
        text.persianChars[i]
      );
    }
    return value;
  }

  static replacePersianDigitsWithEnglish(string) {
    return string
      .replace(/[\u0660-\u0669]/g, function(c) {
        return c.charCodeAt(0) - 0x0660;
      })
      .replace(/[\u06f0-\u06f9]/g, function(c) {
        return c.charCodeAt(0) - 0x06f0;
      });
  }

  static replaceEnglishDigitsWithPersian(input) {
    if (typeof input == "undefined") input = "";

    var convert = a => {
      return ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"][a];
    };
    return input.toString().replace(/\d/g, convert);
  }

  static switchPersianKeyToEnglish(value) {
    if (!value) {
      return;
    }

    for (var i = 0, charsLen = text.persianKeyChar.length; i < charsLen; i++) {
      value = value.replace(
        new RegExp(text.persianKeyChar[i], "g"),
        text.englishKeyChar[i]
      );
    }

    return value;
  }

  static switchEnglishKeyToPersian(value) {
    if (!value) {
      return;
    }

    for (var i = 0, charsLen = text.englishKeyChar.length; i < charsLen; i++) {
      try {
        value = value.replace(
          new RegExp(text.englishKeyChar[i], "g"),
          text.persianKeyChar[i]
        );
      } catch (error) {}
    }

    return value;
  }

  static fixPersianHalfSpace(value) {
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
  }
  static replaceArabicDigitsWithPersian(value) {
    if (!value) {
      return;
    }
    value = value.toString();

    for (
      var i = 0, numbersLen = text.arabicNumbers.length;
      i < numbersLen;
      i++
    ) {
      value = value.replace(
        new RegExp(text.arabicNumbers[i], "g"),
        text.persianNumbers[i]
      );
    }
    return value;
  }

  static replaceArabicDigitsWithEnglish(value) {
    if (!value) {
      return;
    }
    value = value.toString();

    for (
      var i = 0, numbersLen = text.arabicNumbers.length;
      i < numbersLen;
      i++
    ) {
      value = value.replace(
        new RegExp(text.arabicNumbers[i], "g"),
        text.englishNumbers[i]
      );
    }
    return value;
  }

  static capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static randomString(length: number, chars: string): string {
    if (!chars) {
      throw new Error("Argument 'chars' is undefined");
    }

    if (typeof chars != "string") {
      throw new Error("chars should be string like 1234567");
    }
    const charArray = chars.split("");

    const result = [];
    for (var i = 0; i < length; i++) {
      result[i] = charArray[Math.floor(Math.random() * charArray.length)];
    }

    return result.join("");
  }

  /** Sync */
  static randomAsciiString(length): string {
    return text.randomString(
      length,
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    );
  }

  /** Sync */
  static randomNumberString(length): string {
    return text.randomString(length, "0123456789");
  }

  /** Sync */
  static randomAccessToken(): string {
    return text.randomString(
      128,
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._~+/"
    );
  }
}
