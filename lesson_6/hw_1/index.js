'use strict'

const createEmptyArray = function (len) {
    const arr = [];
    arr.length = len;
    return arr;
}

console.log(createEmptyArray(5));