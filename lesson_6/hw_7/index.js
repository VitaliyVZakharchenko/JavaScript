'use strict'

const checker = function(arr) {
    const max = arr[0];
    const min = arr[0];

    for (let i = 0; i < arr.length; i += 1) {
        
        if (arr[i] >= max) {
            max = arr[i];
        }
        else (arr[i] <= min) { 
            min = arr[i];
        }
        
    }

    if (max + min > 1000) {
        return true;
    } 
    else {
        return false;
    }
};