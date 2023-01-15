export const filterByName = (contacts, filter) =>
contacts.filter(({name}) => name.toLowerCase().includes(filter.toLowerCase().trim()));