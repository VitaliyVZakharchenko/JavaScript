'use strict';

const listElem = document.querySelector('.search__btn');

const logTarget = () => {
    const inputEl = document.querySelector('.search__input');
    console.log(inputEl.value);
}

listElem.addEventListener('click', logTarget);