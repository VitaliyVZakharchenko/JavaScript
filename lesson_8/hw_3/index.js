'use strict'

const transaction = {
    currency: 'USD',
    value: 170,
    operation: 'sale',
};

const getKeys = obj => Object.keys(obj)
    .forEach(el => console.log(el));

const result = getKeys(transaction);