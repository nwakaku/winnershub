import React from 'react';
import Nav from '../utils/Nav';
import Category2 from '../utils/Category2';
import Footer from '../utils/Footer';
import ShopUtils from '../utils/ShopUtils';



const ProductPage = () => {
    return (
        <section>
            <Nav/>
           {/* <ProductUtils/> */}
           <ShopUtils/>
           <Category2/>
           <Footer/>
        
        </section>
    )
}

export default ProductPage
