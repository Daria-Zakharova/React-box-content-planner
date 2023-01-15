import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionByType = type => extraActions.map(action => action[type]);

const contactsInititalState = {
    items: [],
    isLoading: false,
    error: null
};

const fulfilledReducer = state => {
    state.isLoading = false;
    state.error = null;
}

const fetchFulfilledReducer = (state, action) => {
    state.items = action.payload;
};

const addFulfilledReducer = (state, action) => {
    state.items.push(action.payload);
};

const deleteFulfilledReducer = (state, action) => {
    const deletedIdx = state.items.findIndex(item => item.id === action.payload);
    state.items.splice(deletedIdx, 1);
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
        .addCase(fetchContacts.fulfilled, fetchFulfilledReducer)
        .addCase(addContact.fulfilled, addFulfilledReducer)
        .addCase(deleteContact.fulfilled, deleteFulfilledReducer)
        .addMatcher(isAnyOf(...getActionByType('fulfilled')), fulfilledReducer)
        .addMatcher(isAnyOf(...getActionByType('pending')), pendingReducer)
        .addMatcher(isAnyOf(...getActionByType('rejected')), rejectedReducer);
    }
})

export const contactsReducer = contactsSlice.reducer;