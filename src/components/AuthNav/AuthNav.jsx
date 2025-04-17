import { NavLink } from "react-router-dom";
import { Button, Stack } from "@mui/material";

const linkStyle = {
  textTransform: 'none',
  color: 'text.primary',
  '&.active': {
    fontWeight: 'bold',
    color: 'primary.main',
    borderBottom: '2px solid',
    borderColor: 'primary.main',
    borderRadius: 0,
  },
}; 
export default function AuthNav() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/register"
        variant="outlined"
        color="secondary"
        sx={linkStyle}
      >
        Register
      </Button>
      <Button
        component={NavLink}
        to="/login"
        variant="contained"
        color="secondary"
        sx={linkStyle}
      >
        Log In
      </Button>
    </Stack>
  );
}