export const selectUser = state => state.auth.user;

export const selectLoggedIn = state => state.contacts.user;

export const selectIsRefreshing = state => state.isRefreshing;

export const selectAuthError = state => state.auth.error;