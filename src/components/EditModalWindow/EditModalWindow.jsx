import { Formik, Form, Field } from 'formik';
import css from './EditModalWindow.module.css';

const EditModalWindow = ({ isOpen, onClose, contact, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h3>Edit Contact</h3>
        <Formik
          initialValues={{ name: contact.name, number: contact.number }}
          onSubmit={(values) => {
            onSubmit(contact.id, values);
            onClose();
          }}
        >
          <Form className={css.form}>
            <label>
              Name:
              <Field name="name" />
            </label>
            <label>
              Number:
              <Field name="number" />
            </label>
            <div className={css.btnWrap}>
              <button type="submit">Save</button>
              <button type="button" onClick={onClose}>Cancel</button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default EditModalWindow;