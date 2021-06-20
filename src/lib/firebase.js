import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

// here i want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyDGM6JC_jUVUTnYxetWnnCRnl9IdWG3OrY',
  authDomain: 'instagram-yt-edefb.firebaseapp.com',
  projectId: 'instagram-yt-edefb',
  storageBucket: 'instagram-yt-edefb.appspot.com',
  messagingSenderId: '446067826025',
  appId: '1:446067826025:web:df5c9544346f73839831f8'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file (only ONCE!)
// seedDatabase(firebase);

export { firebase, FieldValue };
