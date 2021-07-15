import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyA-lJH23Dp_oRkdoJ4AnlgB4ysxPqqGPUE",
    authDomain: "photogram-fe28a.firebaseapp.com",
    projectId: "photogram-fe28a",
    storageBucket: "photogram-fe28a.appspot.com",
    messagingSenderId: "638128569170",
    appId: "1:638128569170:web:aae6fabb4605316c53188b"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const projectStorage = firebase.storage();
export const projectFirestore = firebase.firestore();

