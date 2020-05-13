'use strict';

export function sumOfSquares() {
    return [...arguments].reduce((acc, el) => {
        return acc + el;
    }, 0);
}