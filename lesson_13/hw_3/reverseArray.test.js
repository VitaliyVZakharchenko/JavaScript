import { reverseArray } from '../../../lesson_7/hw_2/index.js';

it ('should get reversed Array', () => {
    const result = reverseArray([1, 2, 3, 4, 5]);

    expect(result).toEqual([5, 4, 3, 2, 1]);
});

it ('if array is not array return null', () => {
    const result = reverseArray("1, 2, 3, 4, 5");

    expect(result).toEqual(null);
});