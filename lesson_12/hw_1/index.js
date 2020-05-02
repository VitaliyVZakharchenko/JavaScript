'use strict'

const reverseString = str => {
    if (typeof str != 'string') {
        return null;
    }
    
    return str.split('').reverse().join('');
};

const result = reverseString('Yo'); 
console.log(result);