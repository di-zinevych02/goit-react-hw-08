import LoginForm from "../../components/LoginForm/LoginForm";
import { Container, Typography, Paper } from "@mui/material";

export default function LoginPage() {
  return (
    <Container maxWidth="xs" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom>
          Please log in
        </Typography>
        <LoginForm />
      </Paper>
    </Container>
  );
}
