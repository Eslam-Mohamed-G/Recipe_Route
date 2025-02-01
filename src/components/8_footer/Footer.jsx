import React from 'react';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className="row">
                    <div className='footer-body'>
                        <Link to='/'>
                            <img src={Logo} alt="logo" className='logo' />
                        </Link>
                        <p>Route</p>
                    </div>
                    <p className='copy-right'>© 2025 <a href="https://github.com/Eslam-Mohamed-G" target='blank'>Eslam Mohamed</a>. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
