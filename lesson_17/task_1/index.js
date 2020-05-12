export const user = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
        
    }
}

const func = user.getFullName.bind(user);