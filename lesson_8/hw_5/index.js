'use strict'

const transaction = {
    value: 170,
}

export const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
};

export const addPropertyV2 = (obj, key, value) => {
    Object.assign(obj[key] = value);
    return obj;
};


export const addPropertyV3 = (obj, key, value) => {
    let newObj = {};

    Object.assign(newObj, obj);
    newObj[key] = value;
    return newObj;
};

export const addPropertyV4 = (obj, key, value) => 
    ({...obj, [key]: value});
    // result = {...obj, [key]: value}
    // return result;
    
// console.log(addPropertyV4(transaction, 'currency', 'USD'));