import React, { useState } from 'react';
import { FaSearch , FaBars} from 'react-icons/fa';
import {  Link, NavLink } from 'react-router-dom';




const Nav = () => {

    const [open, setOpen] = useState(true)


    return (
        <div>
            <div className='nav-section'>
                <div className='brand-and-navBtn'>
                    <span className='brand-name'>
                        ARMOR_LAB
                    </span>
                    <span className='navBtn flex' onClick={() => setOpen(!open)}>
                        <FaBars/>
                    </span>
                </div>

                {/* navigation menu */}
                <nav className={`${open ? 'top-nav' : 'top-nav showNav'}`}>
                    <ul>
                        <li><NavLink exact to='/' activeClassName='active'>Home</NavLink></li>
                        <li><NavLink to='/gallery' activeClassName='active'>Gallery</NavLink></li>
                        <li><NavLink to='/kite' activeClassName='active'>Shop</NavLink></li>
                        <li><NavLink to='/contact' activeClassName='active'>Contact</NavLink></li>
                    </ul>
                </nav>
                <span className='search-icon'>
                    <FaSearch/>
                </span>
            </div>
        </div>
    )
}

export default Nav
