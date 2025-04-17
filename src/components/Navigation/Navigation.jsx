import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Button, Stack } from '@mui/material';

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
export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Stack direction="row" spacing={2}>
      <Button
        component={NavLink}
        to="/"
        sx={linkStyle}
      >
        Home
      </Button>
      {isLoggedIn && (
        <Button
          component={NavLink}
          to="/contacts"
          sx={linkStyle}
        >
          Contacts
        </Button>
      )}
    </Stack>
  );
}