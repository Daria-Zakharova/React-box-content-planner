import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63c411448067b6bef6d2e719.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
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