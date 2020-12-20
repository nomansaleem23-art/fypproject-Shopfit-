import firebase from 'firebase';




// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAhbJCq4CdGc7aG688G0VJsCJegypL2GwI",
    authDomain: "fyp-ecommerce-website.firebaseapp.com",
    projectId: "fyp-ecommerce-website",
    storageBucket: "fyp-ecommerce-website.appspot.com",
    messagingSenderId: "178210223554",
    appId: "1:178210223554:web:0c87dde5c9c231b5aa925b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();