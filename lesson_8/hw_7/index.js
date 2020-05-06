'use strict'

// const obj11 = {
//     name: 'Tom',
//     age: 17,
// };

// const obj22 = {
//     name: 'Bob',
//     age: 17,
// };

// const obj3 = {
//     name: 'Bob',
//     age: 17,
//     student: false
// };

// const obj4 = {
//     name: 'Tom',
//     age: 17,
// };

// const compareObjects = (obj1, obj2) =>
//     JSON.stringify(obj1)===JSON.stringify(obj2) ? true : false;
// nice try

export const compareObjects = (obj1, obj2) => {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }

    return keys1.reduce((acc, key) =>
        obj1[key] === obj2[key], true);
};

// console.log(compareObjects(obj11, obj22));