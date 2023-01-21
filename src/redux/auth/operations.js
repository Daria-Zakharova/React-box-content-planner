import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://connection-api.herokuapp.com";

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
  };

export const signUp = createAsyncThunk(
    'auth/login', async(user, thunkAPI) => {
        try {
            const response = await(await axios.post('/users/signup', user)).data;
            setAuthHeader(response.token);
            return response;
        }
        catch(e){
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login', async (user, thunkAPI) => {
      try {
        const response = await(await axios.post('/users/login', user)).data;
        setAuthHeader(response.token);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );

export const logOut = createAsyncThunk(
    'auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } 
    catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});

export const refreshUser = createAsyncThunk(
    'auth/refresh', async (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;
  
      if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
      }
  
      try {
        setAuthHeader(persistedToken);
        const response = await(await axios.get('/users/me')).data;
        return response;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );