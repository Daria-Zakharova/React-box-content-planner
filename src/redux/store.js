import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/auth-slice";
import { contactsReducer } from "./contacts-and-filtering/contacts-slice";
import { filterReducer } from "./contacts-and-filtering/filter-slice";

export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: authReducer, 
    }
});