import { Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { selectUser, selectIsLoggedIn } from "../../redux/auth/selectors";

export default function HomePage() {
  const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    
return (
    <Stack spacing={4} alignItems="center" mt={8}>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "4rem" },
          textAlign: 'center',
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        Welcome to the Phonebook App
      </Typography>

      {isLoggedIn ? (
        <Typography variant="h6" color="text.secondary" textAlign="center">
          Hi, <strong>{user.name}</strong>! Let's go to your{' '}
          <Link to="/contacts">Phonebook</Link> !
        </Typography>
      ) : (
        <Typography variant="h6" color="text.secondary" textAlign="center">
          <Link to="/register">Register</Link> or{' '}
          <Link to="/login">Log In</Link> quickly to use the app.
        </Typography>
      )}
    </Stack>
  );
}