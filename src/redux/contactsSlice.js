import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchDataThunk } from './contactsOps.js';
// https://6817394426a599ae7c39ae51.mockapi.io/contacts
const initialState = {
    items: [],
    isLoading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(fetchDataThunk.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload);
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addMatcher(isAnyOf(fetchDataThunk.rejected, deleteContactThunk.rejected, addContactThunk.rejected), (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        .addMatcher(isAnyOf(fetchDataThunk.pending, deleteContactThunk.pending, addContactThunk.pending), (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addMatcher(isAnyOf(fetchDataThunk.fulfilled, deleteContactThunk.fulfilled, addContactThunk.fulfilled), (state) => {
            state.isLoading = false;
        });
    },
});


export const { addContact, deleteContact, dataFulFilledOperation,  setLoading, setError} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;