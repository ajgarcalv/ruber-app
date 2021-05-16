import './App.css';
import React from 'react';
import HeaderLogo from './HeaderLogo/headerLogo';
import BookRide from './BookRide/bookRide';
import PastRides from './PastRides/pastRides';

function App() {
  return (
    <div className="App">
      <HeaderLogo />
      <div className="rides">
      <BookRide />
      <PastRides />
      </div>
    </div>
  );
}

export default App;
