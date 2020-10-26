// // 01 - travel-gram
// import React from 'react';
// import './01-travel-gram/index.scss';
// import { useState } from 'react';
// import ImgaeGrid from './01-travel-gram/components/ImgaeGrid';
// import Model from './01-travel-gram/components/Model';
// import Title from './01-travel-gram/components/Title';
// import UploadForm from './01-travel-gram/components/UploadForm';

// function App() {
//   const [selectedImg, setSelectedimg] = useState(null);

//   return (
//     <div className="App">
//       <Title />
//       <UploadForm />
//       <ImgaeGrid setSelectedimg={setSelectedimg} />
//       {selectedImg && <Model selectedImg={selectedImg} setSelectedimg={setSelectedimg} />}
//     </div>
//   );
// }

// export default App;










// // 02 - clock it
// import React from 'react';
// import './02-clock-it/index.scss';
// import TaskList from './02-clock-it/componenets/TaskList';
// import Form from './02-clock-it/componenets/Form';

// function App() {
//   // firebase.firestore().collection('clock-it').add({task: "implementing firebase", time: '30s'})

//   return <div className="App">
//     <h1>Just clock it</h1>
//     <TaskList/>
//     <Form/>
//   </div>;
// }

// export default App;









// 03 - To do CRUD app
import React, {useState} from 'react';
import './03-todo-with-crud/App.scss';
import {db, timestamp} from './03-todo-with-crud/firebase/config'
import Form from './03-todo-with-crud/components/Form.jsx'
import TodoList from './03-todo-with-crud/components/TodoList.jsx';
import Modal from './03-todo-with-crud/components/Modal';
import { Container} from '@material-ui/core';
import useFirestore from './03-todo-with-crud/hooks/useFirestore';


function App(){
  const todos = useFirestore()

  const [open, setOpen] = useState(false);
  const [update, setUpdate] = useState('');
  const [toUpdateId, setToUpdateId] = useState('');

  const addTodo = (input) => {
    db.collection('todos').add({ task: input, timestamp: timestamp() });
  }

  const deleteTodo = (id) => {
    db.collection('todos').doc(id).delete();
  };

  const editTodo = () => {
    db.collection('todos').doc(toUpdateId).update({ task: update });
    setOpen(false);
  };

  const openUpdateModal = (todo) => {
    setOpen(true);
    setToUpdateId(todo.id);
    setUpdate(todo.task);
  };

  const handleClose = () => {
    setOpen(false)
  };

  return (
     <Container maxWidth="sm" className="App">
       <h1>To do</h1>
       <Form addTodo={addTodo}/>
       <TodoList todos={todos} deleteTodo={deleteTodo} openUpdateModal={openUpdateModal}/>
       <Modal open={open} editTodo={editTodo} update ={update} setUpdate={setUpdate} handleClose={handleClose}/>
    </Container>
  )
}

export default App