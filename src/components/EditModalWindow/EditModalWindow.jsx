import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Stack } from '@mui/material';


const ContactSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required").matches(/^\d{3}-\d{2}-\d{2}$/, 'Number Format: 123-45-67'),
});

const EditModalWindow = ({ isOpen, onClose, contact, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Edit Contact</DialogTitle>
      <DialogContent>
        <Formik
          initialValues={{ name: contact.name, number: contact.number }}
          validationSchema={ContactSchema}
          onSubmit={(values) => {
            onSubmit(contact.id, values);
            onClose();
          }}
        >
          {({ errors, touched, handleChange, values }) => (
            <Form>
              <Stack spacing={2} mt={2}>
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
              </Stack>
              <DialogActions sx={{ mt: 2 }}>
                <Button onClick={onClose} color="secondary">Cancel</Button>
                <Button type="submit" variant="contained" color="primary">Save</Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default EditModalWindow;