'use strict'

const countOccurrences = (str, findstr) => {
    if (findstr == '') {
        return null;
    }

    return str.split(findstr).length - 1;
};

console.log(countOccurrences('Hello, are you here', 'e'));