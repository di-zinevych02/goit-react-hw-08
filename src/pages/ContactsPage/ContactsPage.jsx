import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactForm from "../../components/ContactForm/ContactForm";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/contacts/selectors';
import { Container, Typography, Box, Divider, Paper  } from "@mui/material";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    return (
    
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom>
        Phonebook
      </Typography>
      <Box mb={3}>
        <ContactForm />
      </Box>
      <Divider sx={{ mb: 3 }} />
      <SearchBox />
      <Box mt={4}>
        {isLoading ? <Loader /> : <ContactList />}
            </Box>
            </Paper>
    </Container>
  );
}
