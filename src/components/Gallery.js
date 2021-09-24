import React from 'react';
import Header from '../utils/Header/Header.js'
import Category2 from '../utils/Category2.js';
import Footer from '../utils/Footer.js';
import Main from '../utils/Main.js';
import Menu from '../utils/Menu.js';
import AboutGal from '../utils/AboutGal.js';


const Gallery = () => {
    return (
        <div>
            <AboutGal/>
            <Menu/>
            <Category2/>
            <Footer/>
        </div>
    )
}

export default Gallery
