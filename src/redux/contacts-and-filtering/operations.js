import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts', 
    async(_, thunkAPI) => {
        try {
            return await(await(axios.get('/contacts'))).data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async(contact, thunkAPI) => {
        try {
            return await(await(axios.post('/contacts', contact))).data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async(id, thunkAPI) => {
        try {
            return await(await(axios.delete(`/contacts/${id}`))).data.id;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)