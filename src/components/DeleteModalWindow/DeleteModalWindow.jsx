import Modal from "react-modal";
import css from "./DeleteModalWindow.module.css";
Modal.setAppElement('#root');
export default function DeleteModalWindow({ isOpen, onConfirm, onCancel, contactName }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCancel}
      contentLabel="Confirm Delete"
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <h2 className={css.title}>Delete Contact</h2>
      <p className={css.text}>
        Are you sure you want to delete <strong>{contactName}</strong>?
      </p>
      <div className={css.actions}>
        <button onClick={onConfirm} className={css.confirmBtn}>
          Yes, delete
        </button>
        <button onClick={onCancel} className={css.cancelBtn}>
          Cancel
        </button>
      </div>
    </Modal>
  );
}
