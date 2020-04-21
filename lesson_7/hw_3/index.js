"use strict";

const increaseEvenEl = (arr, delta) =>
    !Array.isArray(arr) ? null : 
    arr.filter(arr => arr % 2 === 0).map(num => num + delta);

const numbers = [1, 2, 3, 4, 5, 6];

console.log(increaseEvenEl(numbers, 2));