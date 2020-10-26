import React from 'react';
import { Dialog, DialogContent, TextField, DialogActions, Button } from '@material-ui/core';

function Modal({ open, editTodo, update, setUpdate, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          label="Update Todo"
          type="text"
          fullWidth
          name="updateTodo"
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={editTodo} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
