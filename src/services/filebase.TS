import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBMiB5Ql_FWEoR4N4-b20BeVV0Z18f3zms",
    authDomain: "letmeask-ffc9d.firebaseapp.com",
    databaseURL: "https://letmeask-ffc9d-default-rtdb.firebaseio.com",
    projectId: "letmeask-ffc9d",
    storageBucket: "letmeask-ffc9d.appspot.com",
    messagingSenderId: "1009663969842",
    appId: "1:1009663969842:web:676c7a6d22c2d9c2238a2b",
    measurementId: "G-C4E9G824J4"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const database = firebase.database();
  