'use strict'

const getSpecialNumbers = numbers =>
    numbers.filter(num => num % 3 === 0);

const sortArray = numbers =>
numbers.slice().sort((a, b) => b - a);

const flatArray = arr => arr
.reduse((acc, elem) => {
    return acc.concat(elem);
}, []);

const getMessageForPassedStudents = (allStudents, failedStudents) =>
    allStudents
        .filter(name => !failedStudents.includes(name))
        .map(name => 'Good job, ' + name);