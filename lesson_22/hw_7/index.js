'use strict';

const inputElem = document.querySelector('.text-input');

const logTarget = (event) => {
    console.log(event.target.value);
}

inputElem.addEventListener('change', logTarget);