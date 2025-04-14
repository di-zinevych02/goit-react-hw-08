import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import {selectVisibleContacts} from "../../redux/contactsSlice";
export default function ContactList() {
    const contacts = useSelector(selectVisibleContacts);
    return (
    <>
       {contacts.length ? (
      <ul className={css.contactslist}>
              {contacts.map((contact) => (
                  <li className={css.item} key={contact.id}>
                   <Contact data={contact} />
               </li>
                  ))}
           </ul>
              ) : (<p  className={css.nocontacts}>No contacts found</p>
          )}
   </>
  );
}