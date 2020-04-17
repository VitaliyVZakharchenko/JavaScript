"use strict";

const getPrimes = function (n) {
    for (let i = 1; i <= n; i++) {
        let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j) {continue;}
      count += 1;

    }
    if (count === 2)
    console.log(i);
}
}
getPrimes(15);