'use strict'

const swap = function (arr) {
    const [start, ...rest] = arr;
    return [...rest, start];
}