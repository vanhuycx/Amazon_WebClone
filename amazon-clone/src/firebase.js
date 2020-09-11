import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAw1JFQOwZCMFjwpqC_P_7IJBNDFFlMNgk",
  authDomain: "clone-efe6b.firebaseapp.com",
  databaseURL: "https://clone-efe6b.firebaseio.com",
  projectId: "clone-efe6b",
  storageBucket: "clone-efe6b.appspot.com",
  messagingSenderId: "488730272298",
  appId: "1:488730272298:web:92dfc02dc8049872905953",
  measurementId: "G-47G30PSZ4M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
