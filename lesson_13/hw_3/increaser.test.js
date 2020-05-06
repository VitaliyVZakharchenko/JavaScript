import { increaser } from '../../../lesson_5/hw_3/index.js';

it ('should get increas', () => {
    const result = increaser(2, 1);

    expect(result).toEqual(3);
});

it ('should get increas', () => {
    const result = increaser(1, 2);

    expect(result).toEqual(1);
});

it ('should get increas', () => {
    const result = increaser(5, 3);

    expect(result).toEqual(8);
});