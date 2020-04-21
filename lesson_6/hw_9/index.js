'use strict'

const withdraw = function (clients, balances, client, amount) {
    let someClient;

    for (let i = 0; i < clients.length; i += 1) {
      if (clients[i] === client) {
        someClient = i;
      }
    }
  
    if (balances[someClient] >= amount) {
      return (balances[someClient] = balances[someClient] - amount);
    } else {
      return -1;
    }
}

  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50);
  console.log(result);