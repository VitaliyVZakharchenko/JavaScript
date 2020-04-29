'use strict'

const getRandomNumbers = (leng, min, max) => {
    let arr = [];
    
    for (let i = 0; i < leng; i += 1) {
        arr[i] = Math.floor((Math.random() * (max - min + 1)) + min);
    }

    return arr;
};

console.log(getRandomNumbers(5, 1, 15));