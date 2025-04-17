import AppBar from "../AppBar/AppBar";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Layout({ children }) {
  return (
    <Container maxWidth="lg">
      <AppBar />
      <Box mt={4}>{children}</Box>
    </Container>
  );
}