'use strict'

const numbers = [4, 5.6, 19.1154, 1.447, '  5.7kkl', null, NaN, Infinity, undefined];

const getFiniteNumbers = arr =>
    arr.filter(el => Number.isFinite(el));


const getFiniteNumbersV2 = arr =>
    arr.filter(el => isFinite(el));


const getNaN = arr =>
    arr.filter(el => Number.isNaN(el));


const getNaNV2 = arr =>
    arr.filter(el => isNaN(el));


const getIntegers = arr =>
    arr.filter(el => Number.isInteger(el));


const result = getIntegers(numbers);
console.log(result);