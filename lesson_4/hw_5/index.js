'use strict'
let result = 0;
for(let i = 0; i <= 1000; i++){
     result += i;
}

const result_2 = result / 1234;
console.log(result_2);

const result_3 = result % 1234;
console.log(result_3);


result_2 > result_3 ? console.log(true) : console.log(false);