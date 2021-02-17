import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDM4yBqU46OnWLmHKl247CsHDoskhIE8RM",
  authDomain: "weight-tracker-f5bbd.firebaseapp.com",
  projectId: "weight-tracker-f5bbd",
  storageBucket: "weight-tracker-f5bbd.appspot.com",
  messagingSenderId: "784180478202",
  appId: "1:784180478202:web:0ed7223b0d2babf3b00943",
});

const db = firebaseApp.firestore();

export default db;
