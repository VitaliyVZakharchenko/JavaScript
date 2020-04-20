"use strict";

const squareArray = function (arr) {
  let newArr = [];

  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i] * arr[i];
  }

  return newArr;
};