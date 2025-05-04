import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    option: 'all contacts',
};

const slice = createSlice({
    name: 'option',
    initialState,
    reducers: {
        changeOption(state, action) {
            state.option = action.payload;
        },
    },
});

export const optionReducer = slice.reducer;
export const {changeOption } = slice.actions;