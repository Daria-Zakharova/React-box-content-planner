export const selectUser = state => state.auth.user;

export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthError = state => state.auth.error;

export const selectIsLoadingSignUp = state => state.auth.isLoading.signUp;

export const selectIsLoadingLogIn = state => state.auth.isLoading.logIn;