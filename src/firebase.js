import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAvieG-jsFBZTZ9nLSmbAaOGQ7TLl-uQxE",
  authDomain: "weight-tracker-public.firebaseapp.com",
  projectId: "weight-tracker-public",
  storageBucket: "weight-tracker-public.appspot.com",
  messagingSenderId: "297986682772",
  appId: "1:297986682772:web:e8bba40ebd1bc9b6a72981",
});

const db = firebaseApp.firestore();

export default db;
