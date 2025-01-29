import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import MenuOpen from '../../assets/open.png'
import MenuClose from '../../assets/close.png'
import { NavLink } from 'react-router';

function Navbar() {
    const [menuToggle, setMenuToggle] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleMenu = () => { setMenuToggle(!menuToggle); setIsOpen(!isOpen) }
    return (
        <div className='navbar'>
            <div className='container'>
                <div className='row'>
                    <div className='navbar-menu'>
                        <NavLink to={'/'}>
                            <img src={Logo} alt="logo" className='logo' />
                        </NavLink>
                        <button className="navbar-toggler" type="button" onClick={handleMenu}>
                            {menuToggle ? <img src={MenuOpen} alt="MenuOpen" className='toggler-img' /> : <img src={MenuClose} alt="MenuClose" className='toggler-img' />}
                        </button>
                    </div>
                    <div className={`navbar-collapse ${!isOpen ? 'menuOpen' : 'menuClose'}`}>
                        <ul className="navbar-nav isOpen">
                            <li className="nav-item">
                                <NavLink className="nav-link active">Meals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">Ingredients</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link">Area</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
