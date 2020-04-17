"use strict";

const getPrimes = function (n) {
    let count = '';
  nextPrime: for (let i = 2; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }
    count += i;
    }
  console.log(count);
}

getPrimes(10);
