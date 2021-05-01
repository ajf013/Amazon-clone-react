import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCTp8gUE-CI_Cw3wgMew6sAZDxDLQbYbGY",
    authDomain: "ashopclonereact.firebaseapp.com",
    projectId: "ashopclonereact",
    storageBucket: "ashopclonereact.appspot.com",
    messagingSenderId: "567150765085",
    appId: "1:567150765085:web:77200efb61b9d3678152f4",
    measurementId: "G-ER5DXM85VH"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };