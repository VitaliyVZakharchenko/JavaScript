import { getSum } from '../../lesson_5/hw_1/index.js';

it ('should get sum of even numbers', () => {
    const result = getSum(1, 5);

    expect(result).toEqual(6);
});

it ('should get sum of even numbers', () => {
    const result = getSum(1, 6);

    expect(result).toEqual(12);
});

it ('should get sum of even numbers', () => {
    const result = getSum(5, 25);

    expect(result).toEqual(150);
});