import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionByType = type => extraActions.map(action => action[type]);
console.log(getActionByType('pending'));

const contactsInititalState = {
    items: [],
    isLoading: false,
    error: null
};

const fulfilledReducer = (state, action) => {
    state.isLoading = false;
    state.items = action.payload;
    state.error = null;
};

const pendingReducer = state => {
    state.isLoading = true;
};
  
const rejectedReducer = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInititalState,
    extraReducers: builder => {
        builder
        .addMatcher(isAnyOf(...getActionByType('fulfilled')), fulfilledReducer)
        .addMatcher(isAnyOf(...getActionByType('pending')), pendingReducer)
        .addMatcher(isAnyOf(...getActionByType('rejected')), rejectedReducer);
    }
})

export const contactsReducer = contactsSlice.reducer;