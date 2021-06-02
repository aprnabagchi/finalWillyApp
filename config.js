import firebase from 'firebase'
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyBP0NSyarQUwr80ISSPWynI-u40-h73gj4",
  authDomain: "libraryapp-c976a.firebaseapp.com",
  databaseURL: 'https://console.firebase.google.com/project/undefined/firestore/data/',
  projectId: "libraryapp-c976a",
  storageBucket: "libraryapp-c976a.appspot.com",
  messagingSenderId: "111817543875",
  appId: "1:111817543875:web:33bb373dac2d853ab71276"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore()