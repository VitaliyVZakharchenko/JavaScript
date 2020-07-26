export const parseUser = stringJson => {
    try {
        return JSON.parse(stringJson);
    } catch(err) {
        return null;
    }
};

// const user = '{"name": "Tom"}';
// console.log(parseUser(user));