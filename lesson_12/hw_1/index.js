'use strict'

const reverseString = str => {
    if (str == 'string') {
        return null;
    }
    
    return str.split('').reverse().join('');
};

const result = reverseString('Yo'); 
console.log(result);