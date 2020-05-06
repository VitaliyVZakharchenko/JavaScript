'use strict'

const user = {
    name:'Sam'
}

export const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
};

export const addPropertyV2 = (userData, userId) => {
    Object.assign(userData.id = userId);
    return userData;
};

export const addPropertyV3 = (userData, userId) =>
    Object.assign({}, userData, {id: userId});
 
    export const addPropertyV4 = (userData, userId) => {
    let newObj = {...userData, id: userId};
    return newObj;
};

// const result = addPropertyV3(user, '12345');
// console.log(result);