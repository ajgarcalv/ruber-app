import React, { useState } from 'react';
import CarIcon from '../images/car-icon.png';
import '../BookRide/bookRide.css';


const BookRide = ({ addRide }) => {

  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const handleSubmit = () => {


  }




  return (

    <div className='book-ride'>
      <div className="book-ride__icon">
        <img className="book-ride__img" src={CarIcon} alt="" />
          Book Ride
        </div>


      <div className="book-ride__item-box">
        <div className="book-ride__personal-info">
          <form
            className="book-ride__item"
            action=""
          >
            First Name
        <input
              type="text"
            />
          </form>

          <form
            className="book-ride__item"
            action=""
          >
            Last Name
        <input
              type="text"


            />
          </form>

          <form
            className="book-ride__item"
            action=""
          >
            Pick Up
          <input
              type="text"


            />
          </form>

          <form
            className="book-ride__item"
            action=""
          >
            Drop Off
          <input
              type="text"


            />
          </form>
          <div className="submit-button__container">
            <button
              className="submit-button"
            >Submit</button>
          </div>
        </div>
      </div>
    </div>

  )

}




export default BookRide