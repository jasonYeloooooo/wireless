import React, { Component } from 'react'

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get,child } from "firebase/database";
import Gauge from './Gauge.js'



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
    sensor1: '',
    sensor2: '',
    sensor3: ''
  }
  
    readSensor1Data =()=>{
      setInterval(this.fun1,1000,"fun1")
    }
    fun1=()=>{
      const dbRef = ref(getDatabase());
      get(child(dbRef,'/sensor/sensor1' )).then((snapshot) => {
      if (snapshot.exists()) {
        this.setState ({
          sensor1 : snapshot.val()
        })
      if(this.state.sensor1 > 85) alert("location 1 sound level is unsafe")
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
    }

    readSensor2Data =()=>{
      setInterval(this.fun2,1000,"fun2")
    }
    fun2=()=>{
      const dbRef = ref(getDatabase());
      get(child(dbRef,'/sensor/sensor2' )).then((snapshot) => {
      if (snapshot.exists()) {
        this.setState ({
          sensor2 : snapshot.val()
        })
      if(this.state.sensor2 > 85) alert("location 2 sound level is unsafe")
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
      writeUserData()
    });
    }

    readSensor3Data =()=>{
      setInterval(this.fun3,1000,"fun3")
    }
    fun3=()=>{
      const dbRef = ref(getDatabase());
      get(child(dbRef,'/sensor/sensor3' )).then((snapshot) => {
      if (snapshot.exists()) {
        this.setState ({
          sensor3 : snapshot.val()
        })
      if(this.state.sensor3 > 85) alert("location 3 sound level is unsafe")
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
      writeUserData()
    });
    }

   alertBox=()=>{
     alert("fuck ")
   }

    render() {
      return (
        <div>
          <p>Location 1:  {this.state.sensor1} db</p>
          <button onClick={this.readSensor1Data}> get data </button>
          
          <Gauge Noise={this.state.sensor1}></Gauge>
          <br/>
          <p>Location 2: {this.state.sensor2} db</p>
          <button onClick={this.readSensor2Data}> get data </button>
          <Gauge Noise={this.state.sensor2}></Gauge>

          <p>Location 3: {this.state.sensor3} db</p>
          <button onClick={this.readSensor3Data}> get data </button>
          <Gauge Noise={this.state.sensor3}></Gauge>
         
        </div>
      )
    }
}
