import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
//коли додаємо в будь-якому місці axios.defaults.baseURL то цей юрл буде використовуватись у всіх http запитах у нашому додатку де використ аксіос, тому дублювати не потрібно
axios.defaults.baseURL = 'https://connections-api.goit.global/';
//Екшени які диспатчаться, вони зберігаються в операції
// Перед запитом: tasks/fetchTasks/pending
// Після успішного запиту: tasks/fetchTasks/fulfilled
// Після запиту з помилкою: tasks/fetchTasks/rejected



//createAsyncThunk функція яка виконує http запит і диспатчить екшени 
//операція диспатчнула екшен пендінг перед тим як виконати запит і після того як асинхронна функція виконалась вона диспачнула фулфілд екшен
// зміна fetchContacts зберігає результат виклику createAsyncThunk, просто зберігає результат виклику
// те шо повертаємо з асинхронної функції буде значення payload(return response.data)
export const fetchContacts = createAsyncThunk(
    //базовий тип екшену(вказує що будемо робити, ім8я слайсу/що будемо робити)
    'contacts/fetchContacts',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            //обробляємо помилку в слайсі  
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const addContact = createAsyncThunk(
    'contacts/addContact',
    // якщо в addTask передали якийсь аргумент (в компоненті contactForm) то  він буде newTask
    async (newTask, thunkAPI) => {
        try {
            
        //другий аргумент це те, що треба передати на бекенд(вданому випадку обєкт з властивостями)
            const response = await axios.post('/contacts', newTask);
            toast.success(`Contact "${response.data.name}" added successfully`);
            return response.data;
        } catch (error) {
            toast.error("Failed to add contact");
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            
            const response = await axios.delete(`/contacts/${contactId}`);
            toast.success("Contact deleted successfully");
            return response.data;
        } catch (error) {
            toast.error("Failed to delete contact");
            return thunkAPI.rejectWithValue(error.message);
        }
    }
    
);
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ contactId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.patch(`/contacts/${contactId}`, updatedData);
      toast.success(`Contact "${response.data.name}" updated successfully`);
      return response.data;
    } catch (error) {
      toast.error('Failed to update contact');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);