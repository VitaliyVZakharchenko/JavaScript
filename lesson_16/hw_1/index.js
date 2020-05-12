"use strict";

export const createArrayOfFunctions = (num) => {
  let arr = [];
  if (!Number.isInteger(num)) return null;
  if (num === undefined) return arr;

  for (let i = 0; i < num; i++) {
    arr[i] = function () {
      return i;
    };
  }

  return arr;
};

console.log(createArrayOfFunctions(2));