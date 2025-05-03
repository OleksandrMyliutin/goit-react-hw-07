import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
    name: 'contacts',   // Назва частини store
    initialState: {
    items: [],        // Початковий список контактів
    },
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

// Експортуємо екшени (щоб можна було викликати їх у компонентах)
export const { addContact, deleteContact } = contactsSlice.actions;

// Експортуємо редюсер
export const contactsReducer = contactsSlice.reducer;