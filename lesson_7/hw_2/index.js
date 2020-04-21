'use strict'

const reverseArray = arr =>
    !Array.isArray(arr) ? null : arr.reverse();
    
const array = [1, 2, 3, 4, 5];

console.log(array);
console.log(reverseArray(array));