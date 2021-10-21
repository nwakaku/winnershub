import React from 'react'
import './checkout.css';
import { getCartItems } from '../../features/cart/cartSlice';
import { useSelector } from 'react-redux';



const CheckoutUtils = () => {
    const cartItems = useSelector(getCartItems);

    return (
        <div className='checkout container'>
            <h2>Shipping Details</h2>
            <div className='checkout_details'>
                <div className='checkout_information'>
                    <div>
                        <h3>Personal Details</h3>
                    </div>
                    <div className='checkout_form'>
                        <input type='text' placeholder='firstName'/>
                        <input type='text' placeholder='lastName'/>
                        <input type='text' placeholder='middleName'/>
                        <input type='text' placeholder='Address'/>
                        <input type='text' placeholder='city'/>
                        <input type='text' placeholder='state'/>
                    </div>
                    

                </div>
                <div className='order_list'>
                    <h3>Purchase information</h3>
                    <ul>
                        <li>PurchasePrice <span>#{cartItems.reduce((a, c) => a + c.new_price * c.qty, 0)}</span></li>
                        <li>Shipping Fee <span>#500</span></li>
                        <li>Grand Total <span>#1200</span></li>
                    </ul>
                    <hr/>
                    <div className='last'>
                        <button>PAYMENT</button>
                        <button >BACK TO SHOP</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default CheckoutUtils
