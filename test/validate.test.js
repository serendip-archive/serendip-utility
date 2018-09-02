
var assert = require('assert');
var validate = require('..').validate;

describe('validate utility', () => {

  describe('#isLength()', () => {
    it('should return true when min and max is applied', () => {
      assert.equal(validate.isLength("1234", 3, 4), true);
    });

  });



  describe('#isEmail()', () => {

    var badEmails = ["31231@3133123", "www.aa.com"];

    badEmails.forEach(badEmail => {
      it(`should return false for ${badEmail}`, () => {
        assert.equal(validate.isEmail(badEmail), false);
      });
    });


    var goodEmails = ["my-email@hotmail.com", "his.g.mail@gmail.com"];

    goodEmails.forEach(goodEmail => {
      it(`should return true for ${goodEmail}`, () => {
        assert.equal(validate.isEmail(goodEmail), true);
      });
    });

  });




  describe('#isAlphanumeric()', () => {

    var positives = ["dasdas4d5as5465", ""];

    positives.forEach(positive => {
      it(`should return true for ${positive}`, () => {
        assert.equal(validate.isAlphanumeric(positive), true);
      });
    });

    var negatives = ["d3.-com", "یشسیسشق232"];

    negatives.forEach(negative => {
      it(`should return true for ${negative}`, () => {
        assert.equal(validate.isAlphanumeric(negative), false);
      });
    });

  });


  describe('#isNumeric()', () => {

    var positives = ["dasdas4d5as5465", ""];

    positives.forEach(positive => {
      it(`should return true for ${positive}`, () => {
        assert.equal(validate.isAlphanumeric(positive), true);
      });
    });

    var negatives = ["d3.-com", "یشسیسشق232"];

    negatives.forEach(negative => {
      it(`should return true for ${negative}`, () => {
        assert.equal(validate.isAlphanumeric(negative), false);
      });
    });


  });


});