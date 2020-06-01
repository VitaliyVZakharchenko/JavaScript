'use strict';

const eventsListElem = document.querySelector('.create-btn');

const logTarget = () => {
    alert('done');
}

eventsListElem.addEventListener('click', logTarget);