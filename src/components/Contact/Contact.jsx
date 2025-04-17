import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import DeleteModalWindow from "../DeleteModalWindow/DeleteModalWindow";
import EditModalWindow from "../EditModalWindow/EditModalWindow";
import { CgProfile } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import { MdClose } from 'react-icons/md';
import { FiEdit3 } from "react-icons/fi";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Stack,
} from '@mui/material';

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(prev => !prev);
  const toggleEditModal = () => setIsEditModalOpen(prev => !prev);

  const handleConfirmDelete = () => {
    dispatch(deleteContact(data.id));
    toggleModal();
  };

  const handleUpdate = (id, updatedData) => {
    dispatch(updateContact({ contactId: id, updatedData }));
  };

  return (
    <>
      <Paper sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, mb: 2, width: '100%' }} elevation={3}>
        <Box>
          <Stack direction="row" alignItems="center" spacing={1}>
            <CgProfile size={20} />
            <Typography variant="body1">{data.name}</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <BsTelephoneFill size={20} />
            <Typography variant="body2" color="text.secondary">{data.number}</Typography>
          </Stack>
        </Box>
        <Stack direction="row" spacing={1}>
          <IconButton onClick={toggleEditModal} color="primary">
            <FiEdit3 />
          </IconButton>
          <IconButton onClick={toggleModal} color="secondary">
            <MdClose />
          </IconButton>
        </Stack>
      </Paper>
      <DeleteModalWindow
        isOpen={isModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={toggleModal}
        contactName={data.name}
      />
      <EditModalWindow
        isOpen={isEditModalOpen}
        onClose={toggleEditModal}
        contact={data}
        onSubmit={handleUpdate}
      />
    </>
  );
};

export default Contact;