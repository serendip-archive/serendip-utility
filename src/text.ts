export class text {


    static reverse(input: string) {
        return input.split('').reverse().join('');
    }

    static replacePersianDigitsWithEnglish(string) {
        return string.replace(/[\u0660-\u0669]/g, function (c) {
            return c.charCodeAt(0) - 0x0660;
        }).replace(/[\u06f0-\u06f9]/g, function (c) {
            return c.charCodeAt(0) - 0x06f0;
        });
    }

    static replaceEnglishDigitsWithPersian(input) {

        if (!input)
            input = '';
        var convert = (a) => {
            return ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'][a];
        }
        return input.toString().replace(/\d/g, convert);
    }

}