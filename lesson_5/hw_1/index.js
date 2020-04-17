let sum = 0;

const getSum = function (a, b) {
 for (let i = a; i <= b; i++) {

  if (i % 2 == 0) {
    sum += i;
  }
}
    return sum;
}