'use strict'

const number = 4.548431846;

const multiRoud = num => [
    Math.floor(num * 100) / 100,
    Math.round(num * 100) /100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Number(num.toFixed(2)),
    // +num.toFixed(2),
];

console.log(multiRoud(number));