const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukaine', '34'];

const buildObject = (keysList, valuesList) => 
    keysList.reduce((acc, currentValue, index) =>
    (acc[currentValue] = valuesList[index], acc), {});
    
const result = buildObject(keys, values);
console.log(result);