import { configureStore } from '@reduxjs/toolkit';
import contacts from './contactsReducer';

const store = configureStore({
    reducer: contacts,
});
export default store;
