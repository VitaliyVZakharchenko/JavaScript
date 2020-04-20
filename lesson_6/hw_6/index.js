"use strict";

const cloneArr = function (arr) {
  let newArr = [];

  if (!Array.isArray(arr)) {
    return null;
  } else {
    newArr = arr.slice();
  }
  return newArr;
}