export const selectUser = state => state.auth.user.name;

export const selectLoggedIn = state => state.auth.isLoggedIn;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectAuthError = state => state.auth.error;

export const selectIsLoadingSignUp = state => state.auth.isLoading.signup;

export const selectIsLoadingLogIn = state => state.auth.isLoading.login;

export const selectIsLoadingLogOut = state => state.auth.isLoading.logout;