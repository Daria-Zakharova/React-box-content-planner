import { filterByName } from "utils/filter-by-name";

export const selectContacts = state => state.contacts.items;
export const selectIsLoadingFetch = state => state.contacts.isLoading.fetchContacts;
export const selectIsLoadingAdd = state => state.contacts.isLoading.addContact;
// export const selectIsLoadingDelete = state => state.contacts.isLoading.deleteContact;
export const selectError = state => state.contacts.error;

export const selectFilter = state => state.filter;

export const selectFilteredContacts = state =>  !state.filter ? state.contacts.items : filterByName(state.contacts.items, state.filter);