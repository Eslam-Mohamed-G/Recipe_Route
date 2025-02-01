import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../1_navbar/Navbar';
import Footer from '../8_footer/Footer';

function Layout() {
  return (
      <div className=''>
        <Navbar/>
        <div className='outlet-container'>
          <Outlet/>
        </div>
        <Footer/>
      </div>
  )
}

export default Layout;
