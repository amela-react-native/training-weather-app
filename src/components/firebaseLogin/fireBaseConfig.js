import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyDaPPSw2sY-IazywksRvBaJaSWJVMjHajA',
  authDomain: 'fir-reactnative-3bf8d.firebaseapp.com',
  databaseURL: 'https://fir-reactnative-3bf8d.firebaseio.com',
  projectId: 'fir-reactnative-3bf8d',
  storageBucket: 'fir-reactnative-3bf8d.appspot.com',
  messagingSenderId: '681843944311',
  appId: '1:681843944311:web:23d7fad3b1415947cacf72'
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);
