import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from "./operations";

const handlePending = state => {
    state.loading = true;
    state.error = false;
};
const handleRejected = (state, action) => {
    state.loading = false;
    // "збережи повідомлення про помилку, яке ми явно передали з rejectWithValue() або яке надійшло під час запиту", щоб потім показати його користувачу.
    state.error = action.payload;
}; 
//по результату реєстрації записуємо в стан ці дані
const handleFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    // вказуємо що людина зареєстрована
    state.isLoggedIn = true;
    state.loading = false;
};

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: null,
            email: null,
        },
        //унікальний ключ
        token: null,
        //якщо користувач залогігин тру якщо ні фолс
        isLoggedIn: false,
        isRefreshing: false,
        loading: false,
        error: null,
    },
    extraReducers: (builder) =>
        builder
            .addCase(register.pending, handlePending)
            .addCase(register.fulfilled, handleFulfilled)
            .addCase(register.rejected, handleRejected)
            //обробка екшену логіну
            .addCase(logIn.pending, handlePending)
            .addCase(logIn.fulfilled, handlePending)
            .addCase(logIn.rejected, handleRejected)

    
});

//експортуємо в стор  auth: authReducer,

export default authSlice.reducer;