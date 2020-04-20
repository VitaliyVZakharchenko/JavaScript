'use strict'

const cloneArr = function (arr) {
    let newArr = [];
    if (!Array.isArray(arr)) {
        return null;
    } else {
    newArr = arr.slice();
    // return;
    console.log(newArr);
    }
    
    return;
}

console.log(cloneArr([1, 2, 3, 4, 5]));