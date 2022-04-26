import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCUci--3h7AlnoWyshM4rZbXPoVKzQXC68",
  authDomain: "wirelessnetwork-5f810.firebaseapp.com",
  databaseURL: "https://wirelessnetwork-5f810-default-rtdb.firebaseio.com",
  projectId: "wirelessnetwork-5f810",
  storageBucket: "wirelessnetwork-5f810.appspot.com",
  messagingSenderId: "511134433821",
  appId: "1:511134433821:web:50173d32f84754c911fcf4",
  measurementId: "G-FFEXX3M9C8"
};

const firebase = initializeApp(firebaseConfig);
// Get a reference to the database service

export default firebase;