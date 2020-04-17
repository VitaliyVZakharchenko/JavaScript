"use strict";

const getPrimes = function (n) {
  let count = 2;
  for (let i = count; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) continue;
    }
    console.log(i);
}
}

// getPrimes(30);