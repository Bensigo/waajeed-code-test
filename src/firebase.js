import firebase from "firebase";
const config = {
  apiKey: "AIzaSyDpFAgJC-Id8VNknwr-V7YvjvO3HY4p0Po",
  authDomain: "waajed-d6fa8.firebaseapp.com",
  databaseURL: "https://waajed-d6fa8.firebaseio.com",
  projectId: "waajed-d6fa8",
  storageBucket: "waajed-d6fa8.appspot.com",
  messagingSenderId: "750432590094"
};
const Firebase = firebase.initializeApp(config);

export default Firebase;