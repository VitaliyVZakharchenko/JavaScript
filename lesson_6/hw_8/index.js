'use strict'

const sortAsc = function (array) {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length-1-i; j += 1) {
            if (array[j+1] < array[j]) {
                let t = array[j+1];
                array[j+1] = array[j];
                array[j] = t;
            }
        }
     }                     
    return array;
}

const sortDesc = function (array) {
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length-1-i; j += 1) {
            if (array[j+1] > array[j]) {
                let t = array[j+1];
                array[j+1] = array[j];
                array[j] = t;
            }
        }
     }                     
    return array;
}

const numbers = [9, 5, 10, 4, 7, 67, 3];
const result = sortDesc(numbers);

console.log(result);
