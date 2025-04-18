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
        <Container maxWidth="xs" sx={{ mt: 4 }}>
                <Box display="flex" justifyContent="center" mb={2}>
  <Typography variant="h3" gutterBottom>
    Phonebook
  </Typography>
</Box>
            <Paper elevation={3} sx={{ p: 4 }}>

                <Box mb={3}>
                    <Typography variant="body1" mb={1}>Add a contact's name and phone number</Typography>
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
