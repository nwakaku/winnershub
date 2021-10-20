import React from 'react'
import Category2 from '../utils/Category2'
import CheckoutUtils from '../utils/checkout/CheckoutUtils'
import Footer from '../utils/Footer'
import Nav from '../utils/Nav'

const Checkout = () => {
    return (
        <div>
            <Nav/>
            <CheckoutUtils/>
            
            <Category2/>
            <Footer/>
        </div>
    )
}

export default Checkout
