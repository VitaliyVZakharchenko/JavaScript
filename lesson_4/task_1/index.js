const n = 108
let sum = 1;

for (let i = 1; i <= n; i++) {
    sum = sum += i;
}

console.log(sum);