import { cloneArr } from '../../lesson_7/hw_4/index.js';

it ('should get clone array', () => {
    const result = cloneArr([1, 2, 3, 4, 5]);

    expect(result).toEqual([1, 2, 3, 4, 5]);
});

it ('should get clone array', () => {
    const result = cloneArr(["white", 277, "grey, blue"]);

    expect(result).toEqual(["white", 277, "grey, blue"]);
});

it ('should get null if input is not array', () => {
    const result = cloneArr("black, white, yellow, grey, blue");

    expect(result).toEqual(null);
});