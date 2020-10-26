import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCvWpMKtZHODq_8oCHnZedUVfEjZmBuRO4',
  authDomain: 'travelgram-cb139.firebaseapp.com',
  databaseURL: 'https://travelgram-cb139.firebaseio.com',
  projectId: 'travelgram-cb139',
  storageBucket: 'travelgram-cb139.appspot.com',
  messagingSenderId: '1001911274441',
  appId: '1:1001911274441:web:5eda21e0b5a355d594f618'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
