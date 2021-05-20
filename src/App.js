import './App.css';
import React, { useState } from 'react';
import HeaderLogo from './HeaderLogo/headerLogo';
import BookRide from './BookRide/bookRide';
import PastRides from './PastRides/pastRides';

const ride1 = {
  firstName: "Beavis",
  lastName: "Butthead",
  pickUpLocation: "California",
  dropOffLocation: "New York",
  rideLength: 0
};
const ride2 = {
  firstName: "Alex",
  lastName: "Garcia",
  pickUpLocation: "Somewhere",
  dropOffLocation: "Nowhere",
  rideLength: 2
};

function App() {

  // let bookRideItem = {
  /*
  id:
  firstName:
  lastName:
  pickUpLocation:
  dropOffLocation:
  rideLength:
  */ 
  // }

  const [rides, setRides] = useState([ride1, ride2]);

  const addRide = ( bookRideItem ) => {
    let tempRides = [...rides, bookRideItem];
    setRides(tempRides);
  }

  const deleteRide = ( rideId ) => {
    let tempRides = [...rides]

    for (let i = 0; i < tempRides.length; i++) {
      if (tempRides[i].id === rideId) {
        tempRides.splice(i,1)

      }

    }
    setRides(tempRides);


  }

  const updateRide = ( rideInformation ) => {
    let tempRides = [...rides]
    for (let i=0; i < tempRides.length; i++) {
      if (tempRides[i].id === rideInformation.id) {
        tempRides[i] = rideInformation;
      }
    }
    setRides(tempRides);
  }


  return (
    <div className="App">
      <HeaderLogo />
      <div className="rides">
      <BookRide addRide={addRide}/>
      <PastRides pastRides={rides} deleteRide={deleteRide}/>
      </div>
    </div>
  );
}

export default App;
