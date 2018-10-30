
var assert = require('assert');
var querystring = require('..').querystring;

describe('querystring utility', () => {

    var qsConvertTestCases = [{
        qs: "https://typokhat.com/?category=%D9%85%D8%B5%D8%A7%D8%AD%D8%A8%D9%87&search=&order=date&subject=&type=%D8%AA%D8%A3%D9%84%DB%8C%D9%81",
        obj: {
            search: '',
            order: 'date',
            subject: '',
            type: 'تألیف',
            category: "مصاحبه"
        }
    },
    {
        qs: "category=مصاحبه&order=date&search=&subject=&type=تألیف",
        obj: {
            search: '',
            order: 'date',
            subject: '',
            type: 'تألیف',
            category: "مصاحبه"
        }
    }];

    describe('#toObject()', () => {

        for (let i = 0; i < qsConvertTestCases.length; i++) {
            const testCase = qsConvertTestCases[i];

            it(`should convert querystring to object. test case ${i}`, () => {
                assert.deepEqual(querystring.toObject(testCase.qs), testCase.obj);
            });
        }

    });

    
    describe('#fromObject()', () => {

        for (let i = 0; i < qsConvertTestCases.length; i++) {
            const testCase = qsConvertTestCases[i];

            it(`should convert object to querystring. test case ${i}`, () => {
                assert.deepEqual(querystring.toObject( querystring.fromObject(testCase.obj)), testCase.obj);
            });
        }

    });




});