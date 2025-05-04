import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filters.name;
export const selectError = state => state.contacts.error;
export const selectLoading = state => state.contacts.isLoading;

export const selectFilteredContacts = state => state.filters.name;

export const selectFilteredContactsByOptionMemo = createSelector(
    [selectContacts, selectFilteredContacts], 
    (contacts, filter) => {
        const normalized = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalized));
});