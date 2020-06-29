const baseUrl = 'https://5efa35d5bc5f8f0016c677c4.mockapi.io/api/v1/users';


/* getUsersList code here */
export const getUsersList = () => {
    return fetch(baseUrl)
        .then(response => 
            response.json()
        )
};


/* getUserById code here */
export const getUserById = userId => {
    return fetch(`${baseUrl}/${userId}`)
        .then(response =>
            response.json()
        )
};


/* createUser code here */
export const createUser = user => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(user),
    });
};


/* updateUser code here */
export const updateUser = (userId, updatedUser) => {
    return fetch(`${baseUrl}/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(updatedUser),
    });
};



/* deleteUser code here */
export const deleteUser = userId => {
    return fetch(`${baseUrl}/${userId}`, {
        method: "DELETE",
    });
};