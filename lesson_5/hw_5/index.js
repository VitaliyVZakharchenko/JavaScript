'use strict'

const findDivCount = function (a, b, n) {
    let result = 0;
    for (let i = a; i <= b; i++) {
        if (i % n === 0) {
            result += i;
        }
    }
    return result;
}

console.log(findDivCount(5, 10, 3));