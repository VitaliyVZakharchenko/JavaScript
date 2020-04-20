"use strict";

const numbers = [1, 2, 3, 4];

const squareArray = function (arr) {
  let newArr = [];

  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }

  return newArr;
};

console.log(squareArray(numbers));