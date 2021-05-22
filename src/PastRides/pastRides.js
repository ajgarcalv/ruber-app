import React, { useState } from 'react';
import pastRidesImage from '../images/History.png';
import '../PastRides/pastRides.css';

const PastRides = ({ pastRides, deleteRide }) => {

  // const [removeButton, setRemoveButton] = useState('');
  // const [editButton, setEditButton] = useState('');

  // let deleteItem = () => {
  //   setRemoveButton(deleteRide)
  // }

  return (
    <div className="past-rides">
      <div className="past-rides-img__container">
        <img className="past-rides-img" src={pastRidesImage} alt="" />
        Past Rides
  </div>

      <form className="past-rides__todo">
        <div className="past-rides__list">

          {
            pastRides.map(ride => {
              return (
                <div className="past-rides__item-container" >
                  <div className="past-rides__item">
                    <div>{ride.firstName} {ride.lastName}</div>
                    <div>Pick Up:{ride.pickUpLocation}</div>
                    <div>Drop Off:{ride.dropOffLocation}</div>
                    <div>Ride Length:{ride.rideLength}</div>
                  </div>
                  <div className="past-rides__todo-buttons-container">
                    <button type="button" id="x-button" className="past-rides__todo-button" onClick={() => deleteRide(ride.id)} >❌</button>
                    <button type="button" id="edit-button" className="past-rides__todo-button" >↪</button>
                  </div>
                </div>
              )
            })
          }

        </div>



      </form>


      <div className="rides-this-month">Rides this month: 0</div>
      <div className="average-ride-length">Average ride length: 4.20 miles</div>

    </div>
  )

}




export default PastRides;