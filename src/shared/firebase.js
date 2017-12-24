import Firebase from 'firebase';

const FIREBASE_CONFIG = {
  apiKey: 'AIzaSyDzKFpuUfBQMCYXuW7MxX5hKaJRrNX-ETY',
  authDomain: 'marcopuccio-c7220.firebaseapp.com',
  databaseURL: 'https://marcopuccio-c7220.firebaseio.com',
  projectId: 'marcopuccio-c7220',
  storageBucket: 'marcopuccio-c7220.appspot.com',
  messagingSenderId: '383717508467',
};

const firebase = Firebase.initializeApp(FIREBASE_CONFIG);

export default firebase;
