'use strict'

const sum = arr =>
    !Array.isArray(arr) ? null :
    arr.reduce((acc, elem) => acc + elem);


const numbers = [1, 2, 3, 1]

console.log(sum(numbers));