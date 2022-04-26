import React, { Component } from 'react'

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get,child } from "firebase/database";


// TODO: Replace with your app's Firebase project configuration
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

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);

function writeUserData(userId, name, email, imageUrl) {
  set(ref(database, '/jason/userId'), {
    username: 'name',
    email: "email",
    profile_picture : "imageUrl"
  });
}








export default class getData extends Component {
  state ={
    noise: ''
  }
  
  readData =()=>{
    const dbRef = ref(getDatabase());
    get(child(dbRef,'/jason/userId' )).then((snapshot) => {
    if (snapshot.exists()) {
      this.setState ({
        noise : snapshot.val().email
      })
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  }

  render() {
    return (
      <div>
        <p>the noise: {this.state.noise} db</p>
        <button onClick={this.readData}> get data </button>
        <br/>
        <button onClick={writeUserData}> write data </button>
      </div>
    )
  }
}
