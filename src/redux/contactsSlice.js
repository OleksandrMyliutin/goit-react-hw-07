import { createSlice } from '@reduxjs/toolkit';
// https://6817394426a599ae7c39ae51.mockapi.io/contacts
const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    addContact(state, action) {
        state.items.push(action.payload);
        },
    deleteContact(state, action) {
        state.items = state.items.filter(
        contact => contact.id !== action.payload
        );
        },
    },
});


export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;