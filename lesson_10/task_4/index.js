'use strict'

const getMaxAbsoluteNumber = arr =>
    (!Array.isArray(arr)) || (arr.length == 0) ? null :
    (Math.max(...arr.map(currentValue =>
        Math.abs(currentValue))));
    

console.log(getMaxAbsoluteNumber(number));