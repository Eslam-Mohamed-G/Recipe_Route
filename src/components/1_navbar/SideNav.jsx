import React, { useContext } from 'react';
import Logo from '../../assets/logo.png';
import Favicon from '../../assets/favicon.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { dataContext } from '../Context/ContextAPIProvider';

function SideNav() {
    const navigate = useNavigate();
    return (
        <div>
            <NavLink to={'/'}>
                <img src={Logo} alt="logo" className='logo' />
            </NavLink>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to='/meals/beef' className="nav-link"><img src={Favicon} alt="nav-logo" className='nav-logo' />Meals</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/ingredients' className="nav-link"><img src={Favicon} alt="nav-logo" className='nav-logo' />Ingredients</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/area' className="nav-link"><img src={Favicon} alt="nav-logo" className='nav-logo' />Area</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default SideNav;
