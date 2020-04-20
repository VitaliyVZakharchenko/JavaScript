"use strict"

const getSubArray = function (arr, n) {
    let newArr = [];

    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr;
}