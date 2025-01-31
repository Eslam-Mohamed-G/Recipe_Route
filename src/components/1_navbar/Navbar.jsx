import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import MenuOpen from '../../assets/open.png'
import MenuClose from '../../assets/close.png'
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => { setMenuToggle(!menuToggle); setIsOpen(!isOpen) }
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='row'>
                    <div className='navbar-menu'>
                        <Link to='/'>
                            <img src={Logo} alt="logo" className='logo' />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={handleMenu}>
                            {menuToggle ? <img src={MenuClose} alt="MenuClose" className='toggler-img' /> : <img src={MenuOpen} alt="MenuOpen" className='toggler-img' />}
                        </button>
                    </div>
                    <div className={`navbar-collapse ${isOpen ? 'menuOpen' : 'menuClose'}`}>
                        <ul className="navbar-nav isOpen">
                            <li className="nav-item">
                                <NavLink to={'/meals/beef'} className="nav-link">Meals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/ingredients'} className="nav-link">Ingredients</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to={'/area'} className="nav-link">Area</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
