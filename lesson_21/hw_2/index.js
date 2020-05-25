export function getItemsList() {
    const elemetsList = document.querySelectorAll('.technology');

    console.dir(elemetsList);

    return elemetsList;
}

getItemsList();

export function getItemsArray() {
    const elemetsArray = Array.from(document.querySelectorAll('.tool'));

    console.dir(elemetsArray);

    return elemetsArray;
}

getItemsArray();