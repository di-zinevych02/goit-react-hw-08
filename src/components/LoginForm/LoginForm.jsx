import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { logIn } from '../../redux/auth/operations';
import * as Yup from "yup";
import css from './LoginForm.module.css';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required"),
});

export default function LoginForm() {
  const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        //.unwrap- метод, який дає доступ до проміса операції
        //ВИКЛИК ТОСТУ
        dispatch(logIn(values)).unwrap().then(() => console.log('Login success'));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
    >
          <Form className={css.form} autoComplete="off">
              <div className={css.group}>
        <label className={css.label}>
          Email
          <Field type="email" name="email" />
              </label>
                  <ErrorMessage className={css.error} name="email" component="span" />
              </div>
              <div className={css.group}>
        <label className={css.label}>
          Password
          <Field type="password" name="password" />
              </label>
                  <ErrorMessage className={css.error} name="password" component="span" />
                  </div>
        <button className={css.btnlogin}type="submit">Log In</button>
      </Form>
    </Formik>
  );
}