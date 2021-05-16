import pastRidesImage from '../images/History.png';
import '../PastRides/pastRides.css';


const PastRides = () => {


  return (
    <div className="past-rides">
      <div className="past-rides-img__container">
        <img className="past-rides-img" src={pastRidesImage} alt="" />
        Past Rides
  </div>

      <div className="past-rides__todo">
        <div></div>
        <button id="x-button" className="past-rides__todo-button">❌</button>
        <button id="edit-button" className="past-rides__todo-button">↪</button>


      </div>


      <div className="rides-this-month">Rides this month: 0</div>
      <div className="average-ride-length">Average ride length</div>

    </div>
  )

}




export default PastRides;