import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
    axios.defaults.headers.common.Authorization = token
        ? `Bearer ${token}`
        : '';
};

export const register = createAsyncThunk('auth/register', async credentials => {
    console.log('credentials: ', credentials);
    try {
        const { data } = await axios.post('/users/signup', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
    try {
        const { data } = await axios.post('/users/login', credentials);
        setToken(data.token);
        return data;
    } catch (error) {
        console.log(error);
    }
});

export const logOut = createAsyncThunk('auth/logout', async credentials => {
    try {
        await axios.post('/users/logout', credentials);
        setToken(null);
    } catch (error) {
        console.log(error);
    }
});

export const getLastUser = createAsyncThunk('auth/get', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (!token) return thunkAPI.rejectWithValue();
    setToken(token);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        console.log(error);
    }
});
