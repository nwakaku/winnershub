import React from 'react';
import './productpage.css';
import ProductUtils from '../utils/ProductUtils';
import Nav from '../utils/Nav';
import Category2 from '../utils/Category2';
import Footer from '../utils/Footer';



const ProductPage = () => {
    return (
        <section>
            <Nav/>
           <ProductUtils/>
           <Category2/>
           <Footer/>
        
        </section>
    )
}

export default ProductPage
