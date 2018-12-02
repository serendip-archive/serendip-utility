var assert = require('assert');
var text = require('..').text;

describe('text utility', () => {


    it('should return 1234567890', () => {
        assert.equal(text.replacePersianDigitsWithEnglish("۱۲۳۴۵۶۷۸۹۰"), '1234567890')
    });

    it('should return ۱۲۳۴۵۶۷۸۹۰', () => {
        assert.equal(text.replaceEnglishDigitsWithPersian("1234567890"), '۱۲۳۴۵۶۷۸۹۰')
    });
    


    

});