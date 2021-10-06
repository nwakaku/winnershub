import React from 'react';
import e from '../images/a5.jpg';


const Cart = () => {
    return (
        <div className='product-cart'>

           <h4 className='page-banner-sm'>Cart</h4>

           <div className='cart-collection'>
               <div className='cart-header'>
                   <p>Item</p>
                   <p>quantity</p>
                   <p>Unit price</p>
                   <p>Total</p>
               </div>
                <div className='cart-item'>
                    <form action=''>
                        <div className='cart-product'>
                            <div className='cart-image'>
                                <img src={e} alt='something moving' />
                            </div>
                            <div className='cart-product-info'>
                                <p className='cart-product-name'>Furniture Collace collection</p>
                                <p className='cart-price-sm'>#1,250</p>
                                <small>* 1</small>
                            </div>
                        </div>
                        <div className='cart-quantity-md'>
                            <div className='cart-quantity-controls'>
                                <button>-</button>
                                <input type='number' value='1' readOnly />
                                <button>+</button>
                            </div>
                        </div>
                        <div className='cart-unit-price'>
                            <h4>#1,250</h4>
                        </div>
                        <div className='cart-product-total'>
                            <h4>#1,250</h4>
                        </div>
                        <div className='cart-controls-sm'>
                            <div className='remove'>
                                <span className='ti-trash'></span>Remove
                            </div>
                            <div className='cart-quantity-controls-sm'>
                                <button>-</button>
                                <input type='number' value='1' readOnly />
                                <button>+</button>
                            </div>
                        </div>
                    </form>
                </div> 
           </div>

            <div className='cart-total-holder'>
                
                <div className='cart-total'>
                    <p>Total: </p>
                    <p>#1,200</p>
                </div>

                <div className='cart-action-button'>
                    <a href='#'>Continue shopping</a>
                    <a href='#' className='btn-main'>Proceed to checkout</a>
                </div>
            </div>
           
        </div>
    )
}

export default Cart
