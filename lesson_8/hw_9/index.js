'use strict'

const objC = { a: 1, b: 2, c: 3 };
const arrC = ['a', 'c'];

const pickProps = (obj, arr) => {
    let result = {};
    for (let keyToFind of arr) {
        if (Object.keys(obj).includes(keyToFind)) {
            result[keyToFind] = obj[keyToFind];
        }
    }
    return result;
};

const result = pickProps(objC, arrC);
console.log(result);