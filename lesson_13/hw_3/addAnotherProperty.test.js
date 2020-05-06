import { addPropertyV1, addPropertyV2, addPropertyV3, addPropertyV4 } from '../../lesson_8/hw_5/index.js';

it ('should add property to object', () => {
    const result = addPropertyV1({ value: 170 }, 'currency', 'USD');

    expect(result).toEqual({ value: 170, currency: 'USD'});
});

it ('should add property to object', () => {
    const result = addPropertyV2({ value: 170 }, 'currency', 'USD');

    expect(result).toEqual({ value: 170, currency: 'USD'});
});

it ('should add property to object', () => {
    const result = addPropertyV3({ value: 170 }, 'currency', 'USD');

    expect(result).toEqual({ value: 170, currency: 'USD'});
});

it ('should add property to object', () => {
    const result = addPropertyV4({ value: 170 }, 'currency', 'USD');

    expect(result).toEqual({ value: 170, currency: 'USD'});
});