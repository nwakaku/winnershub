import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, getTotalPrice, removeItemFromCart } from '../features/cart/cartSlice';
import { addItemToCart, reduceItemInCart } from '../features/cart/cartSlice';
import {MdDeleteForever} from 'react-icons/md';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';




const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [quantity, setQuantity] = useState(1);
    const dispatch =  useDispatch();
    const history = useHistory()

    useEffect(() => {
        
    }, [])
    

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }


    const reduceQuantity = () => {
        if (quantity <= 1) return;

        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }
    

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
               {cartItems.map(cartItem => 
                    <div className='cart-item' key={cartItem.id}>
                    <form >
                        <div className='cart-product'>
                            <div className='cart-image'>
                                <img src={cartItem.img ? cartItem.img : null} alt='something moving' />
                            </div>
                            <div className='cart-product-info'>
                                <p className='cart-product-name'>{cartItem.title}</p>
                                <p className='cart-price-sm'>#{cartItem.new_price}</p>
                                <small>* {cartItem.qty}</small>
                                <div 
                                onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} 
                                className='remove'>
                                <MdDeleteForever/>Remove
                            </div>
                            </div>
                        </div>
                        <div className='cart-quantity-md'>
                            <div className='cart-quantity-controls'>
                                <span 
                                    onClick = {() => {
                                        dispatch(reduceItemInCart(cartItem))
                                    }}>-</span>
                                <input  type='text' value={cartItem.qty} readOnly />
                                <span 
                                    onClick = {() => {
                                        dispatch(addItemToCart(cartItem));
                                        }}>+</span>
                            </div>
                        </div>
                        <div className='cart-unit-price'>
                            <h4>#{cartItem.new_price}</h4>
                        </div>
                        <div className='cart-product-total'>
                            <h4>#{cartItem.new_price * cartItem.qty}</h4>
                        </div>
                        <div className='cart-controls-sm'>
                            <div 
                                onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))} 
                                className='remove'>
                                <MdDeleteForever/>Remove
                            </div>
                            <div className='cart-quantity-controls-sm'>
                                <span 
                                    onClick={() => {
                                        dispatch(reduceItemInCart(cartItem))
                                    }}>-</span>
                                <input type='text' value={cartItem.qty} readOnly />
                                <span 
                                    onClick = {() => {
                                        dispatch(addItemToCart(cartItem));
                                        }}>+</span>
                            </div>
                        </div>
                    </form>
                </div> 
                )}
                
           </div>

            <div className='cart-total-holder'>
                
                <div className='cart-total'>
                    <p>Total: </p>
                    <p>
                        ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                        {cartItems.reduce((a, c) => a + c.new_price * c.qty, 0)}
                    </p>
                </div>

                <div className='cart-action-button'>
                    <Link to='/product'>Continue shopping</Link>
                    <a href='#' className='btn-main'
                        onClick={
                            () => {
                                history.push('/checkout')
                            }

                        }
                    
                    >Proceed to checkout</a>
                </div>
            </div>
           
        </div>
    )
}

export default Cart
