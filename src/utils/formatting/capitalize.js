const isOneWord = (str) => str.match(/\s/g) === null;

const capitalize = (str) => str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase();

export const capitalized = str => isOneWord(str) ? capitalize(str) : str.split(' ').map(capitalize).join(' ');
