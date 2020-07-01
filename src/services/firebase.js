import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBgDEZllI3DtMXl9mWyhbYtTZ55k_V2VPM",
  authDomain: "playazchat.firebaseapp.com",
  databaseURL: "https://playazchat.firebaseio.com",
  projectId: "playazchat",
  storageBucket: "playazchat.appspot.com",
  messagingSenderId: "300564021395",
  appId: "1:300564021395:web:2824364ab8586c15284d66",
  measurementId: "G-DMD3JPQ1GM",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
