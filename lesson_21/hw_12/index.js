'use strict';

export function getSection(num) {
    const someEl = document.querySelector(`span[data-number='${num}']`)
    return someEl.closest('.box').dataset.section;
}

// console.log(getSection(5));