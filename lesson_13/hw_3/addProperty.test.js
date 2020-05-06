import { addPropertyV1, addPropertyV2, addPropertyV3, addPropertyV4 } from '../../lesson_8/hw_4/index.js';

it ('should get add property', () => {
    const result = addPropertyV1({name: 'Sam'}, '10');

    expect(result).toEqual({name: 'Sam', id: '10'});
});

it ('should get add property', () => {
    const result = addPropertyV2({name: 'Sam'}, '10');

    expect(result).toEqual({name: 'Sam', id: '10'});
});

it ('should get add property', () => {
    const result = addPropertyV3({name: 'Sam'}, '10');

    expect(result).toEqual({name: 'Sam', id: '10'});
});

it ('should get add property', () => {
    const result = addPropertyV4({name: 'Sam'}, '10');

    expect(result).toEqual({name: 'Sam', id: '10'});
});