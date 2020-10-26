import React from 'react';
import { DeleteOutlineRounded, Edit } from '@material-ui/icons';
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';

function TodoList({ todos, deleteTodo, openUpdateModal }) {
  return (
    <List dense={true}>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListItemText primary={todo.task} />
          <ListItemText />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="Edit" onClick={() => openUpdateModal(todo)}>
              <Edit />
            </IconButton>
            <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
              <DeleteOutlineRounded />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
