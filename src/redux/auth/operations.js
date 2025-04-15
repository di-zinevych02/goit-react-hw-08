import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

//після логіну та після реєстрації записуємо headers Authorization в аксіос axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
const setAuthHeader = (value) => {
    axios.defaults.headers.common.Authorization = value;
}
/*
 * POST @ /users/signup
 * body: { name, email, password }
 *
 * After successful registration, add the token to the HTTP header
 */
// сюди буде надходити обґєкт користувача в асинх функції(credentials-обєкт користувача)
//при реєстрації бекенд створює і повертає інформацію
export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try { 
        const response = await axios.post('/users/signup', credentials);
        setAuthHeader(`Bearer ${response.data.token}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

});

/*
 * POST @ /users/login
 * body: { email, password }
 *
 * After successful login, add the token to the HTTP header
 */
//при логіні бекенд перевіряє і повертає інформацію
// при логіні отримуємо відповідь токені після того як отримали відповідь, перед тим як аписувати користувача в стан
// для аксіоса наголошуємо щоб для всіх запитів  додав Authorization до всіх  headers значення Bearer ${response.data.token}
// з кожним наступним запитом після логіну тепер на бекенд буде йти headers Authorization із нашим токеном
export const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const response = await axios.post('/users/login', credentials);
        setAuthHeader(`Bearer ${response.data.token}`);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
     
});
/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 *
 * After a successful logout, remove the token from the HTTP header
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
     try {
    await axios.post('/users/logout');
         // After a successful logout, remove the token from the HTTP header
         setAuthHeader("");
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
//оновлення користувача
//auth/refresh -базовий тип екшену, другий аргумент асинхронна функція, третій - обєкт налаштувань(опції-умова виконання операції)
export const refreshUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    try {
        //обєкт стану contacts auth and filters
        const reduxState = thunkAPI.getState();
        //reduxState.auth.token
        //якщо токен існує, потрібно робити запит, бо якщо в редакс стані був токен і він не записався це гарнатовано, що користувач незалогінений
        setAuthHeader(`Bearer ${reduxState.auth.token}`);
        const response = await axios.get('/users/current');
        // буде обєкт нашого юзера
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
}, {
    //обєкт налаштувань(опції-умова виконання операції), функція, яка визначає запускається операція чи ні(при умові тру)
    condition: (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        // якщо немає токена, то запит робитись не буде
        return reduxState.auth.token !== null;
    },
}
);
//автоматично редакс персист витягує токін з локал стор і пише його в редакс і  при монтуванні App() диспатчимо операцію, а операція refreshUser отримує токен зі стана поточного і відправляє запит на бекенд