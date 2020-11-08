import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCiOrI9RS982GlIxDL_sZRVOfaRR8wD094",
    authDomain: "wedo-admin-portal.firebaseapp.com",
    databaseURL: "https://wedo-admin-portal.firebaseio.com",
    projectId: "wedo-admin-portal",
    storageBucket: "wedo-admin-portal.appspot.com",
    messagingSenderId: "869259114080",
    appId: "1:869259114080:web:dcc1355906af9df7a37505"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;