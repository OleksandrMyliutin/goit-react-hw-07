import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',        // Назва цього шматочка Store
    initialState: {
    name: '',             // Початкове значення фільтра: порожній рядок
    },
    reducers: {
    changeFilter(state, action) {
        state.name = action.payload;
    },
    },
});

// Експортуємо екшен
export const { changeFilter } = filtersSlice.actions;

// Експортуємо редюсер
export const filtersReducer = filtersSlice.reducer;