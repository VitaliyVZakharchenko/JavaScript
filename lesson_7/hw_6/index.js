'use strict'

const sum = arr =>
    !Array.isArray(arr) ? null :
    arr.reduce((acc, elem) => {
        return acc + elem;
});


const numbers = [1, 2, 3]

console.log(sum(numbers));