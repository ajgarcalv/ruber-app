import React, { useState } from 'react';
import CarIcon from '../images/car-icon.png';
import '../BookRide/bookRide.css';


const BookRide = ({ addRide, state, setState }) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const length = Math.round(((Math.random() * 100) + 10) * 10) / 10;

    let riderInfo = {
      firstName: firstName,
      lastName: lastName,
      pickUpLocation: pickUp,
      dropOffLocation: dropOff,
      rideLength: length
    };

    addRide(riderInfo)
  }




  return (

    <div className='book-ride'>
      <div className="book-ride__icon">
        <img className="book-ride__img" src={CarIcon} alt="" />
        Book Ride
      </div>


      <div className="book-ride__item-box">
        <form className="book-ride__personal-info">
          <div
            className="book-ride__item"
            action=""
          >
            First Name
            <input 
              value={ firstName } 
              onChange={e => setFirstName(e.target.value) }
              type="text"
            />
          </div>

          <div
            className="book-ride__item"
            action=""
          >
            Last Name
            <input 
              value={ lastName } 
              onChange={ e => setLastName(e.target.value) }
              type="text"
            />
          </div>

          <div
            className="book-ride__item"
            action=""
          >
            Pick Up
            <input 
              value={pickUp} 
              onChange={ e => setPickUp(e.target.value)}
              type="text"
            />
          </div>

          <div
            className="book-ride__item"
            action=""
          >
            Drop Off
            <input 
              value={dropOff} 
              onChange = {e => setDropOff(e.target.value)}
              type="text"
            />
          </div>
          <div className="submit-button__container">
            <button 
              type="submit"
              className="submit-button"
              onClick={e => handleSubmit(e)}
            >Submit</button>
          </div>
        </form>
      </div>
    </div>

  );

}




export default BookRide