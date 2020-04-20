'use strict'

const getSpecialNumbers = function (m, n) {
    let result = [];

    for (let i = m; i <= n; i++) {
        if (i % 3 === 0) {
            result.push(i);
        }
    }
    return result;
}