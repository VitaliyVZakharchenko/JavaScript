'use strisct'

const compareSums = function (a, b, c, d) {
    if (sum(a, b) > sum(c, d)) {
        return true;
    } else {
            return false;
        }
}

const sum = function (from, to) {
    let sum = 0;
    for (let i = from; i <= to; i++) {
        sum += i;
    }
    return sum;
}

console.log(compareSums(1, 2, 1, 3));