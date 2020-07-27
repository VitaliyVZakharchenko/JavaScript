const getUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        // console.log(response);
        if (!response.ok) {
            return null;
        }
        const userData = await response.json();
        // console.log(userData);
        return userData;
    } catch (err) {
        throw new Error('Failed to fetch user');
        // console.log(err);
    }
};

getUser('facebook')
    .then(userData => console.log(userData))
    .catch(err => alert(err.message));