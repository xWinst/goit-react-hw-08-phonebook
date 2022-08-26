import { createReducer } from '@reduxjs/toolkit';
import { register, logIn, logOut, getLastUser } from './authOperations';

const initalState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isGettingUser: false,
};

const autorization = createReducer(initalState, {
    [register.fulfilled]: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },

    [logIn.fulfilled]: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },

    [logOut.fulfilled]: (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
    },

    [getLastUser.fulfilled]: (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isGettingUser = false;
    },

    [getLastUser.pending]: (state, action) => {
        state.isGettingUser = true;
    },

    [getLastUser.rejected]: (state, action) => {
        state.isGettingUser = false;
    },
});

export default autorization;
