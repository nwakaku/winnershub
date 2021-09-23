import React from 'react'
import About from '../About';
import Nav from '../Nav'

const Header = () => {
    return (
        <header className='header'>
            <Nav/>
            <About/>
        </header>
    )
}

export default Header
