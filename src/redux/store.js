import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import { optionReducer } from './optionSlice';


const rootReducer = combineReducers({
    contacts:  contactsReducer,
    filters: filtersReducer,
    option: optionReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

