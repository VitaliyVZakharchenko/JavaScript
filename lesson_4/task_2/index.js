const m = 1;
const n = 10;
let result = 1;

for (let i = 1; i <= n ; i++) {
    if (m % 2 === 1) {
    result *= i;
    }
}

console.log("Result: ", result);