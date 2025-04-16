import css from "./Contact.module.css";
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteContact } from "../../redux/contacts/operations";
import DeleteModalWindow from "../DeleteModalWindow/DeleteModalWindow";
import EditModalWindow from "../EditModalWindow/EditModalWindow";
import { updateContact } from "../../redux/contacts/operations";
import { FiEdit3 } from "react-icons/fi"; 

const Contact = ({data}) => {
    //повертає посилання на функцію надсилання екшенів, для того щоб сповістити що в інтерфейсі відбулась подія
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(prev => !prev);
  const handleConfirmDelete = () => {
    dispatch(deleteContact(data.id));
    toggleModal();
  };
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
const toggleEditModal = () => setIsEditModalOpen(prev => !prev);

const handleUpdate = (id, updatedData) => {
  dispatch(updateContact({ contactId: id, updatedData }));
};

  return (
    <>
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
        <div className={css.btnwrapper}>
      <button className={css.btn} onClick={() => setIsModalOpen(true)}>
        <MdClose className={css.icon} size={24} />
          </button>
        </div>
        <div className={css.btnwrapper}>
      <button className={css.btn} onClick={() => setIsEditModalOpen(true)}>
  <FiEdit3 className={css.icon} size={20} />
          </button>
          </div>
    </div>

     <DeleteModalWindow
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={toggleModal}
        contactName={data.name}
      />
      <EditModalWindow
  isOpen={isEditModalOpen}
  onClose={toggleEditModal}
  contact={data}
  onSubmit={handleUpdate}
/>
    </>
      
  );
};

export default Contact;