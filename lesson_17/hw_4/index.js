export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    setFullName(fullName) {
        this.firstName = fullName.slice(' ')[0];
        this.lastName = fullName.slice(' ')[1];
    }
}

const func = user.getFullName.bind(user);