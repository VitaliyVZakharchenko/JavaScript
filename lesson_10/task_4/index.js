'use strict'

// const number = [-777, 3, 4.548, -5.24546, -1, 45, -20];
// const number = [];
// const number = '';

const getMaxAbsoluteNumber = arr =>
    !Array.isArray(arr) || arr.length === 0 ? null :
    Math.max(...arr.map(currentValue =>
        Math.abs(currentValue)));
    

console.log(getMaxAbsoluteNumber(number));