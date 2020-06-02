'use strict';

const taskElem = document.querySelector('.task-status');

const logTarget = (event) => {
    console.log(event.target.checked);
}

taskElem.addEventListener('change', logTarget);