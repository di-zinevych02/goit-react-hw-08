import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Container, Paper, Typography } from "@mui/material";

export default function RegisterPage() {
  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create an account
        </Typography>
        <RegisterForm />
      </Paper>
    </Container>
  );
}