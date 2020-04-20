"use strict";

const checkSum = function (arr) {
  let sum = 0;
  
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
};
