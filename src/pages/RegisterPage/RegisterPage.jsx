import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Container, Typography } from "@mui/material";

export default function RegisterPage() {
  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create an account
        </Typography>
        <RegisterForm />
    </Container>
  );
}