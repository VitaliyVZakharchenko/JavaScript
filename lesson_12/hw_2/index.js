'use strict'

const cleanTransactionsList = transactions =>
    transactions.filter(element => isFinite(element))
    .map(element => '$' + Number(element).toFixed(2));

console.log(cleanTransactionsList(['1.9', '16.4', 17, '1 dollar']));