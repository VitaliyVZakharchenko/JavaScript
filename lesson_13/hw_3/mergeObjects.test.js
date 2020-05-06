import {mergeObjectsV1, mergeObjectsV2, mergeObjectsV3, mergeObjectsV4} from '../../lesson_8/hw_6/index.js';

it ('should merge objects', () => {
    const result = mergeObjectsV1({
        name: 'Tom', 
        age: 17
    },

    {
        name: 'Bob',
        student: false
    });

    expect(result).toEqual({name: 'Bob', age: 17, student: false})
});

it ('should merge objects', () => {
    const result = mergeObjectsV2({
        name: 'Tom', 
        age: 17
    },

    {
        name: 'Bob',
        student: false
    });

    expect(result).toEqual({name: 'Tom', age: 17, student: false})
});

it ('should merge objects', () => {
    const result = mergeObjectsV3({
        name: 'Tom', 
        age: 17
    },

    {
        name: 'Bob',
        student: false
    });

    expect(result).toEqual({name: 'Bob', age: 17, student: false})
});

it ('should merge objects', () => {
    const result = mergeObjectsV4({
        name: 'Tom', 
        age: 17
    },

    {
        name: 'Bob',
        student: false
    });

    expect(result).toEqual({name: 'Tom', age: 17, student: false})
});