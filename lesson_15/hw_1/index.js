'use strict'

export const createCalculator = (num) => {
    let memory = 0;

    const add = (num) => memory += num;
    
    const decrease = (num) => memory -= num;

    const reset = () => memory = 0;

    const getMemo = () => memory;

    return {
        add,
        decrease,
        reset,
        getMemo,
    }
};

const result = createCalculator();

console.log(result.add(6));