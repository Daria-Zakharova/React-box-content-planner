import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";
const setAuthHeader = token => {
    axios.defaults.headers.common.authorization = `Bearer ${token}`;
  };
  
const clearAuthHeader = () => {
    axios.defaults.headers.common.authorization = '';
  };

export const signUp = createAsyncThunk(
    'auth/login', async(user, thunkAPI) => {
        try {
            const response = await(await axios.post('/users/signup', user)).data;
            setAuthHeader(response.token);
            return response;
        }
        catch(e){
            return thunkAPI.rejectWithValue({code: e.code, message: e.message});
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login', async (user, thunkAPI) => {
      try {
        const response = await(await axios.post('/users/login', user)).data;
        setAuthHeader(response.token);
        return response;
      } catch (e) {
        return thunkAPI.rejectWithValue({code: e.code, message: e.message});
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
        const response = await axios.get('/users/current');
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );