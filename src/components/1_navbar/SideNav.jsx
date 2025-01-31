import React from 'react';
import Logo from '../../assets/logo.png';
import Favicon from '../../assets/favicon.png';
import { NavLink, useParams } from 'react-router-dom';

function SideNav() {
    const { category } = useParams();
    return (
        <div>
            <NavLink to={'/'}>
                <img src={Logo} alt="logo" className='logo' />
            </NavLink>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to={`/meals/${category}`} className="nav-link"><img src={Favicon} alt="nav-logo" className='nav-logo' />Meals</NavLink>
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
