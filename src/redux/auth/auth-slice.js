import { sliceActionType } from "utils/slice-action-type";

const { createSlice, isAnyOf } = require("@reduxjs/toolkit");
const { logIn, signUp, logOut, refreshUser } = require("./operations");

const authInitialState = {
    user: { 
        name: null, email: null },
    token: null,
    isLoading: {
        login: false, signup: false, logout: false},
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const logInFulfilledReducer = (state, action) => {
    state.user = {...action.payload.user};
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.isLoading[sliceActionType(action.type)] = false;
    state.error = null;
}

const refreshFulfilledReducer = (state, action) => {
    state.user = {...action.payload};
    state.isRefreshing = false;
    state.isLoggedIn = true;
    state.error = null;
}

const logOutFulfilledReducer = state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
    state.error = null;
    state.isLoading.logout = false;
}

const logInPendingReducer = (state, action) => {
    state.isLoading[sliceActionType(action.type)] = true;
}

const refresPendingReducer = state => {
    state.isRefreshing = true;
}

const rejectedReducer = (state, action) => {
    state.error = action.payload;
    state.isLoading[sliceActionType(action.type)] = false;
}

const refreshRejectedReducer = state => {
    state.isRefreshing = false;
}

const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    extraReducers: builder => {
        builder
        .addCase(refreshUser.pending, refresPendingReducer)
        .addCase(refreshUser.fulfilled, refreshFulfilledReducer)
        .addCase(refreshUser.rejected, refreshRejectedReducer)
        .addCase(logOut.fulfilled, logOutFulfilledReducer)
        .addMatcher(isAnyOf(...[logIn.pending, signUp.pending, logOut.pending]), logInPendingReducer)
        .addMatcher(isAnyOf(...[logIn.fulfilled, signUp.fulfilled]), logInFulfilledReducer)
        .addMatcher(isAnyOf(...[signUp.rejected, logIn.rejected, logOut.rejected]), rejectedReducer);
        
    }
})

export const authReducer = authSlice.reducer;