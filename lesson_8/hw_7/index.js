'use strict'

const obj11 = {
    name: 'Tom',
    age: 17,
};

const obj22 = {
    name: 'Bob',
    age: 17,
};

const obj3 = {
    name: 'Bob',
    age: 17,
    student: false
};

const obj4 = {
    name: 'Tom',
    age: 17,
};

const compareObjects = (obj1, obj2) =>
    JSON.stringify(obj1)===JSON.stringify(obj2) ? true : false;

console.log(compareObjects(obj11, obj4));