'use strict'

const getSpecialNumbers = function (m, n) {
    let result = [];

    for (let i = m; m <= n; i++) {
        if (m % 3 === 0) {
            result.push(i);
        }
    }
    return result;
}