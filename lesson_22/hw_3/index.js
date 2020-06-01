'use strict';

const listElem = document.querySelector('.task-status');

const logTarget = () => {
    console.log(listElem.checked);
}

listElem.addEventListener('change', logTarget);