import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDV45v4p8vzl5DlyB-LA6Df9G98l3Pllqk',
  authDomain: 'todo-app-d073a.firebaseapp.com',
  projectId: 'todo-app-d073a',
  storageBucket: 'todo-app-d073a.appspot.com',
  messagingSenderId: '418636347251',
  appId: '1:418636347251:web:d734ed036dc15b0e3fb706',
  measurementId: 'G-95MXXWCMTT',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
