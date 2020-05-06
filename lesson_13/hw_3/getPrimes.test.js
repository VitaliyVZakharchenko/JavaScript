import { getPrimes } from '../../../lesson_5/hw_2/index.js';

it ('should get prime numbers', () => {
    const result = getPrimes(1, 6);

    expect(result).toEqual(2, 3, 5);
});