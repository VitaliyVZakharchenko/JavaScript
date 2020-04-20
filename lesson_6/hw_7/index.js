"use strict"

const checker = function (arr) {
    let max = arr[0];
    let min = arr[0];

    if (!Array.isArray(arr)) {
        return null;
      }

    for (let i = 0; i < arr.length; i++) {
        
        if (max < arr[i]) {
            max = arr[i];
        }

        if (min > arr[i]) {   
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