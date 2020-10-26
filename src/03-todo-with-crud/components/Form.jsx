import React, { useState } from 'react';
import { AddCircleOutlineRounded } from '@material-ui/icons';
import { Button, TextField } from '@material-ui/core';

const Form = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="todo"
          label="Enter ToDo"
          name="todo"
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<AddCircleOutlineRounded />}
        >
          Add Todo
        </Button>
      </form>
    </div>
  );
};

export default Form;
