import { createReducer } from '@reduxjs/toolkit';
import { register, logIn, logOut, getLastUser } from './authOperations';
import message from 'helpers/Message';

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

    [register.rejected]: (state, action) => {
        message.error('Registration error', `${action.payload.message}`, 'Ok');
    },

    [logIn.rejected]: (state, action) => {
        message.error('Login failed', `${action.payload.message}`, 'Ok');
    },

    [logIn.fulfilled]: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
    },

    [logOut.rejected]: (state, action) => {
        message.error('Logout failed', `${action.payload.message}`, 'Ok');
    },

    [logOut.fulfilled]: (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
    },

    [getLastUser.rejected]: (state, action) => {
        state.isGettingUser = false;
    },

    [getLastUser.fulfilled]: (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isGettingUser = false;
    },

    [getLastUser.pending]: (state, action) => {
        state.isGettingUser = true;
    },
});

export default autorization;
