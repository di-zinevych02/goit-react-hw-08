import {createSelector} from '@reduxjs/toolkit';

import {selectNameFilter} from "../filters/selectors";


export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;

// створюємо мемоізований селектор- селектор, який викликається тільки при зміні його залежностей([selectContacts, selectNameFilter]-масив, які повертають частину стану), другий аргумент функціяБ яка отримає те шо поверне selectContacts та selectNameFilter
export const selectVisibleContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    // функція буде викликана тільки тоді, коли зміниться масив контактів чи коли змінюється фільтр
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
});
