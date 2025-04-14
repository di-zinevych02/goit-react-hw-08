import css from "./Contact.module.css";
import { CgProfile } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {deleteContact} from "../../redux/contactsOps"
const Contact = ({data}) => {
    //повертає посилання на функцію надсилання екшенів, для того щоб сповістити що в інтерфейсі відбулась подія
    const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(data.id));
  };
  
  return (
    <div className={css.container}>
      <div className={css.text}>
  <div className={css.row}>
    <CgProfile className={css.icon} size="20" />
    <p className={css.name}>{data.name}</p>
  </div>
  <div className={css.row}>
    <BsTelephoneFill className={css.icon} size="20" />
    <p className={css.number}>{data.number}</p>
  </div>
</div>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose className={css.icon} size={24} />
      </button>
      
    </div>
  );
};

export default Contact;