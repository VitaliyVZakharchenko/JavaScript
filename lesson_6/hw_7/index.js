'use strict'

const checker = function (arr) {
    let max = arr[0];
    let min = arr[0];

    if (!Array.isArray(arr)) {
        return null;
      }

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