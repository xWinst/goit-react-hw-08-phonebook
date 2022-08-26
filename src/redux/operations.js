import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk(
    'contacts/getContacts',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (contact, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/contacts', contact);
            return data;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, { rejectWithValue }) => {
        try {
            await axios.delete(`/contacts/${contactId}`);
            return contactId;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
