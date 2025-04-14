import { createSlice } from '@reduxjs/toolkit';

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
    },
});
//експортуємо в стор  auth: authReducer,

export default authSlice.reducer;