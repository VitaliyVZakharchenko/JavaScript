'use strict'

export const reverseArray = arr =>
    !Array.isArray(arr) ? null : arr.slice().reverse();
    
// const array = [1, 2, 3, 4, 5];

// console.log(array);
// console.log(reverseArray(array));