'use strict'

const sortContacts = (contacts, bool = true) => {
    if (!Array.isArray(contacts)) {
         return null;
    }

    let result = contacts.sort((a, b) => {
        return a.name.localeCompare(b.name)
    });

    if (bool == false) {
        result = contacts.sort((a, b) => {
        return b.name.localeCompare(a.name)
        });
    }
    return result;
};