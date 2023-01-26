export const nameIsInContacts = (contacts, newName) => contacts.find(({name}) => name === newName);

export const updatedNameIsInContacts = (contacts, idxOfCurrentContact, newName) => {
    const idxOfNameInContacts = contacts.findIndex(({name}) => name === newName);
    return idxOfNameInContacts > 0 && idxOfNameInContacts !== idxOfCurrentContact;
}