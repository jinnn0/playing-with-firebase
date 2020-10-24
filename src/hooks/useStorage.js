import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

// handles file upload and
// returns values about that upload - upload progress, errors, img url etc
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  // everytime we receive new file value, useEffect will run
  useEffect(() => {
    // get a reference to where the file should be saved
    // creats a ref to a file inside the default firebase storage bucket
    // when we upload something, using this reference the file should have this name
    const storageRef = projectStorage.ref(file.name + ' hello');
    const collectionRef = projectFirestore.collection('user-images');

    // take the file and put it in the reference
    // async             // whenever the state of the upload changes - progress, complete etc.
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        const createdAt = timestamp();

        collectionRef.add({ url: url, createdAt: createdAt });
        setUrl(url);
      }
    );
  }, [file]);

  //   return { progress, url, error };
  return [progress, url, error];
};

export default useStorage;
