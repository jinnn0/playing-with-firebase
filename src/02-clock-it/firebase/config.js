import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyBZc5I9eUcjKv4jKP7GIcoeX1j-nxZrrYQ',
  authDomain: 'clock-it-f2141.firebaseapp.com',
  databaseURL: 'https://clock-it-f2141.firebaseio.com',
  projectId: 'clock-it-f2141',
  storageBucket: 'clock-it-f2141.appspot.com',
  messagingSenderId: '3300279758',
  appId: '1:3300279758:web:526fd16946382f4aee179f',
  measurementId: 'G-JP5SL77YMS'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
