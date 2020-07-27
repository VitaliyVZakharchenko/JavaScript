export const getUsersBlogs = userId => {
    try {
        return Promise.all(userId.map(user =>
            fetchUser(user)
            .then(userData => userData.blog)
        ));
    } catch (err) {
        alert(err.message);
    }
};

const fetchUser = async user => {
    try {
        const answer = await fetch(`https://api.github.com/users/${user}`);
        if (response.ok) {
        return response.json();
        }
    } catch (err) {
        throw new Error('Failed to fetch user');
    }
};

getUsersBlogs(['facebook'])
    .then(linksList => console.log(linksList));