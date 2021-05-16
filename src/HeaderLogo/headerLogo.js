import React from 'react';
import RSymbol from '../images/RSymbol.png';
import '../HeaderLogo/headerLogo.css';


const HeaderLogo = () => {
  return(
  <div className="headerLogo">
  <img className="header-img" src={RSymbol} alt="Ruber Symbol" />
  Uber
</div>
  
  )

}



export default HeaderLogo;