import { useState, useEffect } from 'react';
import { db } from '../firebase/config';

function useFirestore() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsub = db
      .collection('todos')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snap) => {
        const documents = snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setTodos(documents);
      });

    return () => unsub();
  }, []);

  return todos;
}

export default useFirestore;
