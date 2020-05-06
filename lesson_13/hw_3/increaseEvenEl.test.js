import { increaseEvenEl } from '../../lesson_7/hw_3/index.js';

it ('should get increase even numbers', () => {
    const result = increaseEvenEl([1, 2, 3, 4, 5, 6], 2);

    expect(result).toEqual([1, 4, 3, 6, 5, 8]);
})

it ('should get null if input is not array', () => {
    const result = increaseEvenEl("1, 2, 3, 4, 5, 6", 2);

    expect(result).toEqual(null);
})