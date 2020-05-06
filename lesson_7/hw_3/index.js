"use strict";

export const increaseEvenEl = (arr, delta) =>
    !Array.isArray(arr) ? null : 
    arr.map(num => num % 2 === 0 ? num + delta : num);

// const numbers = [1, 2, 3, 4, 5, 6];

// console.log(increaseEvenEl(numbers, 2));