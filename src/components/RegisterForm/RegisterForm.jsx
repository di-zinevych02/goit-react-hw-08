import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterSchema = Yup.object().shape({
      name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name can't be longer than 50 characters")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

    password: Yup.string()
    .max(20, "Password can't exceed 20 characters")
  .min(6, "Password must be at least 6 characters")
  .required("Password is required"),
});

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
          onSubmit={handleSubmit}
          validationSchema={RegisterSchema}
    >
          <Form className={css.form} autoComplete="off">
              <div className={css.group}>
        <label className={css.label}>
          Username
          <Field className={css.input} type="text" name="name" />
              </label>
              <ErrorMessage className={css.error} name="name" component="span"/>
              </div>
              <div className={css.group}>
                  <label className={css.label}>
          Email
          <Field className={css.input} type="email" name="email" />
                  </label>
                  <ErrorMessage className={css.error} name="email" component="span"/>
              </div>
              <div className={css.group}>
        <label className={css.label}>
          Password
          <Field className={css.input} type="password" name="password" />
                  </label>
                  <ErrorMessage className={css.error} name="password" component="span"/>
                  </div>
        <button className={css.btnregister} type="submit">Register</button>
      </Form>
    </Formik>
  );
}