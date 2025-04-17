import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { Typography, Button, Stack } from '@mui/material';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Typography variant="body1" sx={{ fontWeight: 500 }}>
        Welcome, {user.name}
      </Typography>
      <Button variant="outlined" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
    </Stack>
  );
}
//Stack — замість ul, div, для гнучкого горизонтального/вертикального розміщення