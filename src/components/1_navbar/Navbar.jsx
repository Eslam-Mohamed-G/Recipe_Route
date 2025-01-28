import React from 'react';
import Logo from '../../assets/logo.png'
import { NavLink } from 'react-router';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='container'>
            <img src={Logo} alt="logo" className='logo' />
            <button className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse">
                <ul className="navbar-nav">
                    <NavLink className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Meals</a>
                    </NavLink>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Ingredients</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Area</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar;
