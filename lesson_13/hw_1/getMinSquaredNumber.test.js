import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('should get null if arrary is empty', () => {
    const result = getMinSquaredNumber([]);
   
    expect(result).toEqual(null);
});

it('should get null if array not is not array', () => {
    const result = getMinSquaredNumber('-777, 3, -2, 6, 45, -20');
    
    expect(result).toEqual(null);
});

it('should get min squared number from array', () => {
    const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
    
    expect(result).toEqual(4);
});