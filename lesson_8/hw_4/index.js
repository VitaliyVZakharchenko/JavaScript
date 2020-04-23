'use strict'

const user = {
    name:'Sam'
}

const addPropertyV1 = (userData, userId) => userData.id = userId;

const addPropertyV2 = (userData, userId) => {
    Object.assign(userData.id = userId);
    return userData;
};

const addPropertyV3 = (userData, userId) => 
    Object.assign(userData, {id: userId});
 
const addPropertyV4 = (userData, userId) => {
    let newObj = {...userData, id: userId};
    return newObj;
};

const result = addPropertyV4(user, '12345');
console.log(result);