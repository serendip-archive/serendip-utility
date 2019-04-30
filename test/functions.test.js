
var assert = require('assert');
var utils = require('..');

describe('functions utility', () => {



    describe('#args()', () => {


        it(`should print all functions in this package`, () => {


            for (const key in utils) {
                if (utils.hasOwnProperty(key)) {
                    const utilClass = utils[key];

                    for (const prop in utilClass) {
                        if (prop.startsWith('_'))
                            continue;

                        if (utilClass.hasOwnProperty(prop)) {
                            const element = utilClass[prop];
                            if (typeof element == 'function') {
                                console.log(`\t* [${key}.${prop}(${utils.functions.args(element).join(',')})](doc/classes/utility.${key}.md#${prop.toLowerCase()})`)
                            }

                        }
                    }
                }
            }

        });


    });





});