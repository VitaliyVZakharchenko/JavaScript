"use strict";

export const cloneArr = arr =>
!Array.isArray(arr) ? null : arr.slice();

// const arr = [1, 2, 3, 4, 5];
// console.log(cloneArr(arr));