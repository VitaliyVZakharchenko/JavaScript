import { calc } from './calculator.js';

it ('should get addition of numbers', () => {
    const result = calc("4 + 5");

    expect(result).toEqual("4 + 5 = 9");
});

it ('should get subtract numbers', () => {
    const result = calc("8 - 5");

    expect(result).toEqual("8 - 5 = 3");
});

it ('should get multiplication of numbers', () => {
    const result = calc("8 * 5");

    expect(result).toEqual("8 * 5 = 40");
});

it ('should get division of numbers', () => {
    const result = calc("18 / 3");

    expect(result).toEqual("18 / 3 = 6");
});

it ('should get null if string is not string', () => {
    const result = calc([5 + 5]);
    
    expect(result).toEqual(null);
});
