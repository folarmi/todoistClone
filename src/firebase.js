import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyC3iv-VZUYOKQ092Y0jrz6LSy-tjgjg2fA",
  authDomain: "todoist-clone-f7025.firebaseapp.com",
  projectId: "todoist-clone-f7025",
  storageBucket: "todoist-clone-f7025.appspot.com",
  messagingSenderId: "641102497963",
  appId: "1:641102497963:web:d622160ca9e1e8b3090fee",
});

export default firebaseConfig;
