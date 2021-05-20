import React, { useState } from 'react';
import pastRidesImage from '../images/History.png';
import '../PastRides/pastRides.css';


const PastRides = () => {

  const [removeButton, setRemoveButton] = useState('');
  const [editButton, setEditButton] = useState('');

  return (
    <div className="past-rides">
      <div className="past-rides-img__container">
        <img className="past-rides-img" src={ pastRidesImage } alt="" />
        Past Rides
  </div>

      <form className="past-rides__todo">
        <div className="past-rides__list">
          <div className="past-rides__item" >
            
        </div>
        </div>

        <div className="past-rides__todo-buttons-container">
          <button id="x-button" className="past-rides__todo-button" state={removeButton}>❌</button>
          <button id="edit-button" className="past-rides__todo-button" state={editButton}>↪</button>
        </div>
      </form>


      <div className="rides-this-month">Rides this month: 0</div>
      <div className="average-ride-length">Average ride length: 4.20 miles</div>

    </div>
  )

}




export default PastRides;