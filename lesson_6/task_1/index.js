'use strict'

const getArrayBounds = function (arr) {
    if (!Array.isArray(arr)) {
        return null;
    }
    return [arr.length, arr[0], arr[arr.length - 1]];
}