'use strict'

const getRandomNumbers = (leng, min, max) => {
    if ((max < min) || (max - min < 1) && Math.ceil(max) === Math.ceil(min)) {
        return null;
    };

    let arr = [];
        
    // for (let i = 0; i < leng; i += 1) {
    //     arr[i] = Math.floor((Math.random() * (max - min) + 1) + min);
    // }

    for (let i = 0; i < leng; i += 1) {
        arr[i] = Math.floor(((Math.random() * (max)) + min));
    };

    return arr;
};

console.log(getRandomNumbers(5, 1, 20));