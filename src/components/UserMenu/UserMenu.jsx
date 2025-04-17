import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { Typography, Button, Stack, Box } from '@mui/material';


export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

    return (
  <Box
      sx={{
        width: '100%',
        px: 2,
        py: 1,
                display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
    <Stack   direction={{ xs: 'column', sm: 'row' }}
        spacing={1}
        alignItems="center"
        justifyContent="center"
        sx={{
          width: '100%',
          maxWidth: 400,
        }}>
      <Typography variant="body1" sx={{ fontWeight: 500, textAlign: { xs: 'center', sm: 'left' } }}>
        Welcome, {user.name}
      </Typography>
      <Button variant="outlined" color="secondary" onClick={handleLogout} fullWidth={{ xs: true, sm: false }}
          sx={{ mt: { xs: 1, sm: 0 } }}>
        Logout
      </Button>
            </Stack>
        </Box>
  );
}
//Stack — замість ul, div, для гнучкого горизонтального/вертикального розміщення