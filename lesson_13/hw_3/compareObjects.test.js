import { compareObjects } from '../../lesson_8/hw_7/index.js';

const obj1 = {
    name: 'Tom',
    age: 17
};

const obj2 = {
    name: 'Bob',
    age: 18
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

it ('should get false if compare objects', () => {
    const result = compareObjects(obj1, obj2);

    expect(result).toEqual(false);
});

it ('should get false if compare objects', () => {
    const result = compareObjects(obj2, obj3);

    expect(result).toEqual(false);
});

it ('should get true if compare objects', () => {
    const result = compareObjects(obj1, obj4);

    expect(result).toEqual(true);
});

it ('must be false if the compared objects have different lengths', () => {
    const result = compareObjects(obj4, obj3);

    expect(result).toEqual(false);
});