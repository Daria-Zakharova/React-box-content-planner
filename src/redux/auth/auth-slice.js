const { createSlice, isAnyOf } = require("@reduxjs/toolkit");
const { logIn, signUp, logOut, refreshUser } = require("./operations");

const extraActions = [signUp, logIn, logOut, refreshUser];
const getActionByType = type => {console.log(extraActions.map(action => action[type]));
return extraActions.map(action => action[type])};

const authInitialState = {
    user: { 
        name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};

const fulfilledReducer = (state, action) => {
    state.user.name = action.payload.user.name;
    state.user.email = action.payload.user.email;
    state.token = action.payload.token;
    state.isLoggedIn = true;
}

const logInFulfilledReducer = (state, action) => {
    state.token = action.payload.token;
}

const refreshFulfilledReducer = state => {
    state.isRefreshing = false;
}

const logOutFulfilledReducer = state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
}

const refresPendingReducer = state => {
    state.isRefreshing = true;
}

/* const rejectedReducer = (state, action) => {
    console.log(action, 'rej');
    state.error = action.payload;
} */

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
        .addMatcher(isAnyOf(...[logIn.fulfilled, signUp.fulfilled]), logInFulfilledReducer)
        .addMatcher(isAnyOf(...getActionByType('fulfilled')), fulfilledReducer)
        // .addMatcher(isAnyOf(...getActionByType('rejected'), rejectedReducer));
        
    }
})

export const authReducer = authSlice.reducer;