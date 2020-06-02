'use strict';

const pagElem = document.querySelectorAll('.pagination__page');

const handleClick = (event) => {
    console.log(event.target.dataset.pageNumber);
}

pagElem[0].addEventListener('click', handleClick);
pagElem[1].addEventListener('click', handleClick);
pagElem[2].addEventListener('click', handleClick);