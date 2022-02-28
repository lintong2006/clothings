import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAsH3scJLohg2-YAvVYtauRMH1mZs2SI3A",
    authDomain: "crown-db-6630e.firebaseapp.com",
    projectId: "crown-db-6630e",
    storageBucket: "crown-db-6630e.appspot.com",
    messagingSenderId: "685948581278",
    appId: "1:685948581278:web:f7650b31e56960dde0928f",
    measurementId: "G-ZRSP52L7HD"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;