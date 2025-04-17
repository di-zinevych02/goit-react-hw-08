import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function DeleteModalWindow({ isOpen, onConfirm, onCancel, contactName }) {
  return (
    <Dialog open={isOpen} onClose={onCancel}>
      <DialogTitle>Delete Contact</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete <strong>{contactName}</strong>?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCancel} color="secondary">Cancel</Button>
        <Button onClick={onConfirm} color="primary" variant="contained">Yes, delete</Button>
      </DialogActions>
    </Dialog>
  );
}