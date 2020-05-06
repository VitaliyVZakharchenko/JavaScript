'use strict'

const obj1 = {
    name: 'Tom', 
    age: 17
};

const obj2 = {
    name: 'Bob',
    student: false
};

export const mergeObjectsV1 = (obj1, obj2) =>
    Object.assign(obj1, obj2);

export const mergeObjectsV2 = (obj1, obj2) =>
    Object.assign(obj2, obj1);

export const mergeObjectsV3 = (obj1, obj2) => {
    return ({...obj1, ...obj2});
};

export const mergeObjectsV4 = (obj1, obj2) => {
    return {...obj2, ...obj1};
};

// console.log(mergeObjectsV4(obj1, obj2));