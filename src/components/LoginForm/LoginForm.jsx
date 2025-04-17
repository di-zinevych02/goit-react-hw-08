import { useDispatch } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import {
  TextField,
  Button,
  Stack,
  Typography,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Enter a valid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => console.log('Login success'));
    actions.resetForm();
  };

  return (
    <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <Stack spacing={3}>
              <Typography variant="h5" color="primary">
                Login
              </Typography>

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
                Log In
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Paper>
  );
}
