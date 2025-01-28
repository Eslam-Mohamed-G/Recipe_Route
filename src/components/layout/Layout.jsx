import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../1_navbar/Navbar';

function Layout() {
  return (
    <div className='container'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default Layout;
