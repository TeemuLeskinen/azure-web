import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { LogOutButton } from '../LogOutButton';
import './Navbar.css';


function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar'>
                <Link to='/userloginout' className='navbar-logo'>
                    3D-WEB
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={ click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/invoice' className='nav-links' onClick={closeMobileMenu}>
                            Luo lasku
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/addcustomer' className='nav-links' onClick={closeMobileMenu}>
                            Lisää asiakas
                        </Link>
                    </li>
                    <li >
                        <Link to='/userloginout' className='nav-links-mobile' onClick={closeMobileMenu}>
                            <i className="fas fa-sign-in-alt" />
                        </Link>
                    </li>
                </ul>
                <LogOutButton />
            </nav>



        </>
    )
}

export default Navbar;