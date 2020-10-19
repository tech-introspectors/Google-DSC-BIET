import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';
import { BsList } from "react-icons/bs";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMoblileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };


    return (
        <>
            <IconContext.Provider value={{ color: ' gray' }}>
                <div className='navbar'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo' onClick = {closeMoblileMenu}>
                           
                        DSC BIET
                    </Link>

                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to='/' className='nav-links'onClick = {closeMoblileMenu}>
                                    Home
                          </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/events' className='nav-links' onClick = {closeMoblileMenu}>
                                    Events
                          </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/projects' className='nav-links' onClick = {closeMoblileMenu}>
                                    Projects
                          </Link>
                            </li>
                             <li className="nav-item">
                                <Link to='/team' className='nav-links' onClick = {closeMoblileMenu}>
                                    Team
                          </Link>
                            </li>
                             <li className="nav-item">
                                <Link to='/contact' className='nav-links' onClick = {closeMoblileMenu}>
                                    Contact
                          </Link>
                            </li>
                           
                        </ul>

                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
