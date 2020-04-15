const n = 10000000;
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum = sum += i;
}

console.log('Result: ', sum);
