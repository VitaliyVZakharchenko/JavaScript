"use strict";

const createArrayOfFunctions = (num) => {
  let arr = [];

  (typeof(num) !== "number") || (typeof(num) === "undefined") ? null : arr;

  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
};
