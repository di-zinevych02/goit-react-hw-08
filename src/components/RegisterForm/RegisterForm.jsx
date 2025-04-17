import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import {
  TextField,
  Button,
  Box,
  Typography,
  Stack,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, "Name can't be longer than 50 characters")
    .required('Username is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .max(20, "Password can't exceed 20 characters")
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <Stack spacing={3}>
              <Typography variant="h5" color="primary">
                Register
              </Typography>

              <Field
                name="name"
                as={StyledTextField}
                label="Username"
                fullWidth
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />

              <Field
                name="email"
                as={StyledTextField}
                label="Email"
                fullWidth
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />

              <Field
                name="password"
                as={StyledTextField}
                type="password"
                label="Password"
                fullWidth
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />

              <Button variant="contained" color="primary" type="submit">
                Register
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
