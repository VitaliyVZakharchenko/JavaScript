'use strict'

const numbers = [277, 44, 5.6, 19.1154, 1.447, '  5.7kkl', null, NaN, Infinity, undefined];

const getParsedIntegers = arr => 
    arr.map(currentValue => Number.parseInt(currentValue));

const getParsedIntegersV2 = arr => 
    arr.map(currentValue => parseInt(currentValue));

    const getParsedFloats = arr => 
    arr.map(currentValue => Number.parseFloat(currentValue));

    const getParsedFloatsV2 = arr => 
    arr.map(currentValue => parseFloat(currentValue));


console.log(getParsedFloats(numbers));