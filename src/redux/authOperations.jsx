import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setToken = token => {
    axios.defaults.headers.common.Authorization = token
        ? `Bearer ${token}`
        : '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            setToken(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            setToken(data.token);
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (credentials, { rejectWithValue }) => {
        try {
            await axios.post('/users/logout', credentials);
            setToken(null);
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const getLastUser = createAsyncThunk('auth/get', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;

    if (!token) return thunkAPI.rejectWithValue();
    setToken(token);
    try {
        const { data } = await axios.get('/users/current');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
