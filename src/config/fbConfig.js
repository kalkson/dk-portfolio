import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBilfXASkvQEogo-CH4N9j1TGh2Aeg75UY',
  authDomain: 'dk-portfolio-509ea.firebaseapp.com',
  databaseURL: 'https://dk-portfolio-509ea.firebaseio.com',
  projectId: 'dk-portfolio-509ea',
  storageBucket: 'dk-portfolio-509ea.appspot.com',
  messagingSenderId: '927944643021',
  appId: '1:927944643021:web:c3e480bedd1f7152d07484',
  measurementId: 'G-F3X79TQK60',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
