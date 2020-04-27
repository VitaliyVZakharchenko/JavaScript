'use strict'

const transaction = {
    value: 170,
}

const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
};

const addPropertyV2 = (obj, key, value) => {
    Object.assign(obj[key] = value);
    return obj;
};


const addPropertyV3 = (obj, key, value) => {
    let newObj = {};

    Object.assign(newObj, obj);
    newObj[key] = value;
    return newObj;
};

const addPropertyV4 = (obj, key, value) => 
    ({...obj, [key]: value});
    // result = {...obj, [key]: value}
    // return result;
    
console.log(addPropertyV4(transaction, 'currency', 'USD'));