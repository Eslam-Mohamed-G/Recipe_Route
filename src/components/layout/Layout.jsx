import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../1_navbar/Navbar';

function Layout() {
  return (
      <div className=''>
        <Navbar/>
        <div className='outlet-container'>
          <Outlet/>
        </div>
      </div>
  )
}

export default Layout;
