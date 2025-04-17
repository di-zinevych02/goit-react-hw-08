import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addContact } from "../../redux/contacts/operations";
import { Box, Button, TextField, Typography, Stack } from '@mui/material';

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

  const handleSubmit = (values, actions) => {
    dispatch(addContact({ name: values.name, number: values.number }));
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactSchema}>
      {({ errors, touched, handleChange, values }) => (
        <Form>
          <Stack spacing={2}>
            <TextField
              label="Name"
              name="name"
              variant="outlined"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
            />

            <TextField
              label="Number"
              name="number"
              variant="outlined"
              value={values.number}
              onChange={handleChange}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
              fullWidth
            />

            <Button type="submit" variant="contained" color="primary">
              Add contact
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;