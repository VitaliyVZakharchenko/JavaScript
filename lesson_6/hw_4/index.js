"use strict";

const increaseEvenEl = function (arr, delta) {
  let result = [];

  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] % 2 === 0) {
    //   result = arr[i] + delta;
      result.push(arr[i] + delta);
    }
  }
  return result;
};

console.log(increaseEvenEl([1, 2, 3, 4, 5, 6], 1));