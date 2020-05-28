'use strict';
   
export const squaredNumbers = () => {
    Array.from(document.querySelectorAll('.number'))
        .forEach(el => {
            el.dataset.sqNumber = Math.pow(el.dataset.number, 2)
        });
}

// squaredNumbers();