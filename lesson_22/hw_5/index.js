'use strict';

const listElem = document.querySelector('.single-use-btn');

const logTarget = () => {
    console.log('clicked');
    listElem.removeEventListener('click', logTarget);
}

listElem.addEventListener('click', logTarget);