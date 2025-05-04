import { createSlice } from '@reduxjs/toolkit';
import { addContactThunk, deleteContactThunk, fetchDataThunk } from './operations';
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
    addContact:(state, action) =>{
        state.items.push(action.payload);
        },
    deleteContact:(state, action) =>{
        state.items = state.items.filter(contact => contact.id !== action.payload);
        },
    
    dataFulFilledOperation:(state, action) => {
        state.items = action.payload;
        },
    setLoading:(state, action) =>{
        state.isLoading = action.payload;
        },
    setError:(state, action) =>{
        state.error = action.payload;
        },
    },
    extraReducers: builder => {
        builder
        .addCase(fetchDataThunk.fulfilled, (state, action) => {
            state.items = action.payload;
        })
        .addCase(deleteContactThunk.fulfilled, (state, action) => {
            state.items = state.items.filter(contact => contact.id !== action.payload.data.id);
        })
        .addCase(addContactThunk.fulfilled, (state, action) => {
            state.items.push(action.payload);
        })
        .addCase(fetchDataThunk.rejected, (state, action) => {
            state.error = action.payload;
        });
    },
});


export const { addContact, deleteContact, dataFulFilledOperation,  setLoading, setError} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;