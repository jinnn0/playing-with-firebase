import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyC7mtQxvo-sfk6GOwVWZzt2OKMzl7nmdUE',
  authDomain: 'crud-operation-acaef.firebaseapp.com',
  databaseURL: 'https://crud-operation-acaef.firebaseio.com',
  projectId: 'crud-operation-acaef',
  storageBucket: 'crud-operation-acaef.appspot.com',
  messagingSenderId: '586433519263',
  appId: '1:586433519263:web:6d8f172a55e613f9de0caa'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, timestamp };
