'use strict'

const reverseArray = function (arr) {
    let result = [];

    if (!Array.isArray(arr)) {
        return null;
      }

    for (let i = 1; i <= arr.length; i++) {
        result.push(arr[arr.length - [i]]);
    }
    return result;
}

console.log(reverseArray([1, 2, 3, 4, 5]));


