'use strict';

export function setButton(buttonText) {
    const findBody = document.querySelector('body');
    findBody.innerHTML = `<button>${buttonText}</button>`;
    
    // findBody.textContent = `<button>${buttonText}</button>`;
}

setButton('rgdfgdrdgreg');