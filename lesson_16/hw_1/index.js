"use strict";

export const createArrayOfFunctions = (num) => {
  let arr = [];

  (!Number.isNaN(num)) || (typeof num === 'undefined') ? null : arr;

  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
};