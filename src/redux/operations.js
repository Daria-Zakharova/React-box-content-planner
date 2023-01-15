import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://63c411448067b6bef6d2e719.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll', 
    async(_, thunkAPI) => {
        try {
            return await(await (axios.get('/contacts'))).data;
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
            await (axios.post('/contacts', contact));
            return await(await (axios.get('/contacts'))).data;
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
            await (axios.delete(`/contacts/${id}`));
            return await(await (axios.get('/contacts'))).data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
)