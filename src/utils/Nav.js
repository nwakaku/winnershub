import React, { useState } from 'react';
import { FaSearch , FaBars} from 'react-icons/fa';
import {  Link, NavLink } from 'react-router-dom';
import {FaShoppingBag} from 'react-icons/fa';
import { getCartItems } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';




const Nav = () => {
    const cartItems = useSelector(getCartItems);

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
                        <li><NavLink to='/studio' activeClassName='active'>Studio</NavLink></li>
                        <li><NavLink to='/product' activeClassName='active'>Shop</NavLink></li>
                        <li><NavLink to='/contact' activeClassName='active'>Contact</NavLink></li>
                        <li>
                            <NavLink to='/cart' activeClassName='active'>
                                <FaShoppingBag/><span className='cart_list'>{cartItems.length}</span>
                            </NavLink>
                        </li>
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
