import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6817394426a599ae7c39ae51.mockapi.io';

export const fetchDataThunk = createAsyncThunk('fetchContacts', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const deleteContactThunk = createAsyncThunk('deleteContact', async (id, thunkAPI) => {
    try{
        return await axios.delete(`/contacts/${id}`);
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
})
