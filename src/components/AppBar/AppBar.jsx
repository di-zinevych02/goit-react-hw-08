import { useSelector } from 'react-redux';
import { AppBar as MuiAppBar, Toolbar, Box, Container } from '@mui/material';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

//MuiAppBar — компонент Material UI для верхньої панелі.
//Toolbar — надає внутрішній падінг та гнучке вирівнювання.
//Container обгортає все, щоб дотримуватись ширини макету

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static" color="primary" elevation={3}>
      <Container maxWidth="lg">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 2 }}>
          <Navigation />
          <Box>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </Toolbar>
      </Container>
    </MuiAppBar>
  );
}