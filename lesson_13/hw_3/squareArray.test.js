import { squareArray } from '../../../lesson_7/hw_1/index.js';

it ('should get squared array elements', () => {
    const result = squareArray([2, 5, 6]);

    expect(result).toEqual([4, 25, 36]);
});

it ('if array is not array', () => {
    const result = squareArray("2, 5, 6");

    expect(result).toEqual(null);
});