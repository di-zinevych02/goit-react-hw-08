import { Typography, Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";

export default function HomePage() {
  const user = useSelector(selectUser);
  const isLoggedIn = !!user?.email;

  return (
    <Stack spacing={2} alignItems="center" mt={6}>
      <Typography variant="h3" component="h1" sx={{
          fontSize: "4rem",
          textAlign: 'center',
          fontWeight: "bold",
          color: "primary.main",
          marginTop: 10,
        }}>
        Welcome to the Phonebook App 📱
      </Typography>

      {isLoggedIn ? (
        <Typography variant="h6" color="text.secondary">
          All set, <strong>{user.name}</strong>! Go to your contacts and start managing them easily!
        </Typography>
      ) : (
        <Typography variant="h6" color="text.secondary">
          Register or log in to your account to start using the app.
        </Typography>
      )}
    </Stack>
  );
}