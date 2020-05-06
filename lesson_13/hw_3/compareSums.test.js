import { compareSums } from '../../../lesson_5/hw_4/index.js';

it ('should get comparing sums of numbers at intervals', () => {
    const result = compareSums(1, 2, 1, 3);

    expect(result).toEqual(false);
});

it ('should get comparing sums of numbers at intervals', () => {
    const result = compareSums(1, 3, 1, 2);

    expect(result).toEqual(true);
});