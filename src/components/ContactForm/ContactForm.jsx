import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsOps"
import { useDispatch } from 'react-redux';
const initialValues = {
    name: "", 
    number: ""
  };
  const ContactSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required").matches(/^\d{3}-\d{2}-\d{2}$/, 'Number Format: 123-45-67'),
});

const ContactForm = () => {
    const dispatch = useDispatch();

    //Функція handleSubmit реалізована для обробки подання форми, включаючи додавання нового контакту та скидання форми.
    const handleSubmit= (values, actions) => {
        dispatch(
            addContact({
                name: values.name,
                number: values.number,
            })
        );
        actions.resetForm();
    };
    
    return (

        <Formik 
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactSchema}
        >
            <Form className={css.form}>
                <div className={css.group}>
                    <label className={css.label}>Name</label>
                    <Field className={css.input} type="text" name="name" id={'${fieldId}-name'}/>
                    <ErrorMessage className={css.error} name="name" component="span"/>
                </div>

                <div className={css.group}>
                    <label className={css.label}>Number</label>
                    <Field className={css.input} type="text" name="number" id={'${fieldId}-number'}/>
                    <ErrorMessage className={css.error} name="number" component="span"/>
                </div>
                <button className={css.btnadd} type="submit">Add contact</button>
            </Form>

        </Formik>
    );
};
export default ContactForm;