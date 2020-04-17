"use strict";

const Prime = function (m) {
  for (let i = 2; i < m; i++) {
    if (m % i === 0) {
      return false;
    }
  }
  return true;
}

const getPrimes = function (n) {
  for (let i = 2; i <= n; i++) {
    if (Prime(i)) {
      console.log(i);
    }
  }
}