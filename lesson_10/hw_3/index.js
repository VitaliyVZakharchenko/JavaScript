'use strict'

const number = 4.548431846;

const multiRound = (num, n) => [
    Math.floor(num * Math.pow(10, n)) / Math.pow(10, n),
    Math.round(num * Math.pow(10, n)) / Math.pow(10, n),
    Math.ceil(num * Math.pow(10, n)) / Math.pow(10, n),
    Math.trunc(num * Math.pow(10, n)) / Math.pow(10, n),
    Number(num.toFixed(n)),
    // +num.toFixed(n),
];

console.log(multiRound(number, 3));