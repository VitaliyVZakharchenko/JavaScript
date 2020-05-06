"use strict"

// const numbers = [1, 2, 3, 4, 5];

export const squareArray = arr =>
    !Array.isArray(arr) ? null : arr.map(num => num * num);

// console.log(squareArray(numbers))