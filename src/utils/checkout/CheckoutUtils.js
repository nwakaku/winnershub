import React from 'react'
import './checkout.css'

const CheckoutUtils = () => {
    return (
        <div className='checkout '>
            <h2>Billing Details</h2>
            <div className='checkout-page'>
                <div className='billing-detail'>
                    
                </div>
                <div className='order-summary'>
                    <div className='checkout-total'>
                        <h3>Order Summary</h3>
                        <ul>
                            <li>Cart Amount: <span>1200</span></li>
                            <li>Delivery Charges: <span>100</span></li>
                            <li>Less: Discount 10%: <span>-13</span></li>
                            <hr/>
                            <li>Total Amount: <span>1287</span></li>
                            <hr/>
                            <li><input type='submit' name='checkout' value='Go to Checkout'/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutUtils
