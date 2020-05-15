'use strict';

export const user = {
    firstName: 'Jonh',
    lastName: 'Doe',
    get fullName() {
        return `${this.name} ${this.lastName}`;
    },
    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}