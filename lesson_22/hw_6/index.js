'use strict';

const btnEl = document.querySelector('.btn');
const btnEl1 = document.querySelector('.btn').nextElementSibling;


const handleClick = (event) => {
    console.log(event.target.textContent);
}

btnEl.addEventListener('click', handleClick);
btnEl1.addEventListener('click', handleClick);