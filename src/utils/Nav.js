import React, { useState } from 'react'



const Nav = () => {

    const [open, setOpen] = useState(false)


    return (
        <div>
            <div className='nav-section'>
                <div className='brand-and-navBtn'>
                    <span className='brand-name'>
                        ARMORLAB
                    </span>
                    <span className='navBtn flex' onClick={() => setOpen(!open)}>
                        <i>ul</i>
                    </span>
                </div>

                {/* navigation menu */}
                <nav className={`${open ? 'top-nav' : 'top-nav showNav'}`}>
                    <ul>
                        <li><a href='#' className='active'>Home</a></li>
                        <li><a href='#' className=''>Gallery</a></li>
                        <li><a href='#' className=''>Blog</a></li>
                        <li><a href='#' className=''>Contact</a></li>
                    </ul>
                </nav>
                <span className='search-icon'>
                    <i>ul</i>
                </span>
            </div>
        </div>
    )
}

export default Nav
