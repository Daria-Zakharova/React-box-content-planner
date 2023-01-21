import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { sliceActionType } from "utils/slice-action-type";
import { fetchContacts, addContact, deleteContact } from "./operations";

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionByType = type => {const result = extraActions.map(action => action[type]);
    console.log(result);
    return result
};

const contactsInititalState = {
    items: [],
    isLoading: {
        fetchContacts: false,
        addContact: false,
        deleteContact: false,
    },
    error: null,
};

const fulfilledReducer = (state, action) => {
    state.error = null;
    state.isLoading[sliceActionType(action.type)] = false;
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

const pendingReducer = (state, action) => {
    state.isLoading[sliceActionType(action.type)] = true;
}
  
const rejectedReducer = (state, action) => {
    state.error = action.payload;
    state.isLoading[sliceActionType(action.type)] = false;
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