// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnLaUGPH7wgdHawbtmqpXVS0wMxLcycJg",
    authDomain: "tinder-87a7a.firebaseapp.com",
    projectId: "tinder-87a7a",
    storageBucket: "tinder-87a7a.appspot.com",
    messagingSenderId: "375279569258",
    appId: "1:375279569258:web:09479a9ce635106c11bd13",
    measurementId: "G-8CFRHBRD2J"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;