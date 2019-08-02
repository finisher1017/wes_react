import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC7oNOIWIzFsk-upuUkVlv-LWWW8s0QkxM",
  authDomain: "catch-of-the-day-jseubs.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jseubs.firebaseio.com",
//   projectId: "catch-of-the-day-jseubs",
//   storageBucket: "",
//   messagingSenderId: "433823017387",
//   appId: "1:433823017387:web:ed905f0e0e83a3b7"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;