import React from 'react';
import { useState } from 'react';
import firebase from '../firebase/config';

const Form = () => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase
      .firestore()
      .collection('clock-it')
      .add({ task, time: Number(time) })
      .then(() => {
        setTask('');
        setTime('');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task</label>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />

      <label> Time</label>
      <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />

      <button>Submit</button>
    </form>
  );
};

export default Form;
