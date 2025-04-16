import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from './EditModalWindow.module.css';
const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required").matches(/^\d{3}-\d{2}-\d{2}$/, 'Number Format: 123-45-67'),
});
const EditModalWindow = ({ isOpen, onClose, contact, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h3>Edit Contact</h3>
        <Formik
          initialValues={{ name: contact.name, number: contact.number }}
          validationSchema={ContactSchema}
                  onSubmit={(values) => {
            onSubmit(contact.id, values);
            onClose();
          }}
        >
          <Form className={css.form}>
            <label>
              Name:
                          <Field name="name" />
                          <ErrorMessage className={css.error} name="name" component="span"/>
                      </label>
                      
            <label>
              Number:
              <Field name="number" />
                     <ErrorMessage className={css.error} name="number" component="span"/>
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