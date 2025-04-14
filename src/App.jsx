// import { useState, useEffect } from "react";
import ContactList from "./components/ContactList/ContactList";
import css from "./App.module.css";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
import { selectContacts, selectIsLoading, selectIsError } from './redux/contactsSlice';

export default function App() {
  // Використовується useSelector для отримання значення властивостей з Redux-стану.
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  const dispatch = useDispatch();
  //коли ми диспатчимо операцію у нас викликається асинхронна функція 
  //робимо запит за даними
  //фетчимо дані до того, як завантажиться ContactList
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div className={css.maincontainer}>
      <h1 className={css.headtitile}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && <Loader />}
      {isError && <Error />}
      {contacts.length > 0 && <ContactList />}
    </div>
  );
}

