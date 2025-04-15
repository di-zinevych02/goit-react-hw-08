import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from "./operations";

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
        // контролює стан оновлення користувача
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
            .addCase(logIn.fulfilled, handleFulfilled)
            .addCase(logIn.rejected, handleRejected)

            .addCase(logOut.pending, handlePending)
            //очищаємо стан даних про користувача
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLoggedIn = false;
            })
            .addCase(refreshUser.pending, (state) => {
                state.isRefreshing = true;
                
            })
            .addCase(refreshUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            })
            //якщо поганий токен, тобто якщо закінчили рефреш користувача
            .addCase(refreshUser.rejected, (state, action) => {
                state.isRefreshing = false;
                state.error = action.payload;
            })
    
});

//експортуємо в стор  auth: authReducer,

export default authSlice.reducer;