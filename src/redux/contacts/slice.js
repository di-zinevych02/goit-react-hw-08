import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
//зміна слайс зберігає те що повертає функція createSlice, результат виклику цієї фунції
import { fetchContacts, addContact, deleteContact, updateContact} from './operations';


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
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                // функція filter дозволяє стаоврити новий масив, що містить лише ті завдання, id яких не збігається з id завдання, яке видалено (action.payload.id)
                state.items = state.items.filter((contact) => contact.id !== action.payload.id);
                 state.loading = false;
            
                // Таким чином, коли редюсер отримує дію, він може отримати значення з action.payload і використовувати його для обчислення нового стану.
            })
            .addCase(deleteContact.rejected, handleRejected)
            //очищаємо дані при виходу з профілю самого користувача, його приватні колекції
            .addCase(logOut.fulfilled, (state) => {
                state. items = [];
            })
        
.addCase(updateContact.pending, handlePending)
.addCase(updateContact.fulfilled, (state, action) => {
  state.loading = false;
  const index = state.items.findIndex(contact => contact.id === action.payload.id);
  if (index !== -1) {
    state.items[index] = action.payload;
  }
})
.addCase(updateContact.rejected, handleRejected)
    },
});

//для поновлення та зміну стану
export default slice.reducer;
