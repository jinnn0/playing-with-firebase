import React, { useState, useEffect } from 'react';
import firebase from '../firebase/config';

const sortOption = {
  'task-asc': { col: 'task', direction: 'asc' },
  'task-desc': { col: 'task', direction: 'desc' },

  'time-asc': { col: 'time', direction: 'asc' },
  'time-desc': { col: 'time', direction: 'desc' }
};

const useFirestore = (sortBy) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unSubscribe = firebase
      .firestore()
      .collection('clock-it')
      .orderBy(sortOption[sortBy].col, sortOption[sortBy].direction)
      .onSnapshot((snap) => {
        const documents = snap.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setDocs(documents);
      });

    return () => unSubscribe();
  }, [sortBy]);

  return docs;
};

const TaskList = () => {
  const [sortBy, setSortBy] = useState('task-asc');
  const docs = useFirestore(sortBy);

  return (
    <div>
      <h2>Task list</h2>
      <div className="sortby">
        <label> Sort By</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="task-asc"> Task (a - z)</option>
          <option value="task-desc"> Task (z - a)</option>
          <option disabled> ------ </option>
          <option value="time-asc"> Time (fastest)</option>
          <option value="time-desc"> Time (slowest)</option>
        </select>
      </div>

      <ol>
        {docs.map((doc) => (
          <li key={doc.id}>
            <span>{doc.task}</span> <span>{doc.time}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TaskList;
