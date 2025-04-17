import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import { selectVisibleContacts } from "../../redux/contacts/selectors";
import { List, ListItem, Typography, Box } from '@mui/material';

export default function ContactList() {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Box>
      {contacts.length ? (
        <List sx={{ mt: 2 }}>
          {contacts.map((contact) => (
            <ListItem key={contact.id} disablePadding>
              <Contact data={contact} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1" color="text.secondary" mt={2}>
          No contacts found
        </Typography>
      )}
    </Box>
  );
}