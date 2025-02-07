import React from 'react'
import BrowserCountry from '../2_home/BrowserCountry';
import Footer from '../8_footer/Footer';
import Navbar from '../1_navbar/Navbar';

function Area() {
  return (
    <div className='area-container'>
      <Navbar />
      <div className='container content'>
        <BrowserCountry />
      </div>

      <div className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default Area;
