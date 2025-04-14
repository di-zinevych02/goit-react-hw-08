import {createSelector, createSlice} from '@reduxjs/toolkit';
//зміна слайс зберігає те що повертає функція createSlice, результат виклику цієї фунції
import { fetchContacts, addContact, deleteContact } from './contactsOps';
import {selectNameFilter} from "./filtersSlice";


export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.loading;
export const selectIsError = (state) => state.contacts.error;

// створюємо мемоізований селектор- селектор, який викликається тільки при зміні його залежностей([selectContacts, selectNameFilter]-масив, які повертають частину стану), другий аргумент функціяБ яка отримає те шо поверне selectContacts та selectNameFilter
export const selectVisibleContacts = createSelector([selectContacts, selectNameFilter], (contacts, filterName) => {
    // функція буде викликана тільки тоді, коли зміниться масив контактів чи коли змінюється фільтр
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filterName.toLowerCase())
    );
});

const handlePending = state => {
    state.loading = true;
    state.error = false;
};
const handleRejected = (state, action) => {
    state.loading = false;
    // "збережи повідомлення про помилку, яке ми явно передали з rejectWithValue() або яке надійшло під час запиту", щоб потім показати його користувачу.
    state.error = action.payload;
};
const slice = createSlice({
    name: "contacts",
    initialState: {
        items: [],
        loading: false,
        error: false,
    },
    //extraReducers- властивість на слайсі, для того щоб обробити зовнішні екшени, не власніБ які створені поза слайсом, які створенф нашою операцією 
    extraReducers: (builder) => {
        //параметр який викликає редакс під капотом і переадє функцію будівник за допомогою якого можна оголошувати редюсери для екшенів і додаємо метод(випадок)
        builder
            //екшени, які потрібно обробити 
            .addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.loading = false;
                state.error = false;
                //замінємо порожній масив на масив з контактами, які прийшли з бекенду
                state.items = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)

            //обробка екшену додавання
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                state.loading = false;
                
                //за допомогою  Immer імутабельно оновлює оригінал, змінюємо копію стану(чернетка) а не сам стан(особливість Redux) і чернетку змінюємо як забажаємо
                state.items.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
        
            //обробка екшену видалення

            .addCase(deleteContact.fulfilled, (state, action) => {
                // функція filter дозволяє стаоврити новий масив, що містить лише ті завдання, id яких не збігається з id завдання, яке видалено (action.payload.id)
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);

            
                // Таким чином, коли редюсер отримує дію, він може отримати значення з action.payload і використовувати його для обчислення нового стану.
            });
    },
});

//для поновлення та зміну стану
export default slice.reducer;
