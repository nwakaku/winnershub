import {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems, getTotalPrice, removeItemFromCart } from '../features/cart/cartSlice';
import e from '../images/a5.jpg';
import { addItemToCart } from '../features/cart/cartSlice';



const Cart = () => {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const [quantity, setQuantity] = useState(1);
    const dispatch =  useDispatch();
    

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
                                <img src={e} alt='something moving' />
                            </div>
                            <div className='cart-product-info'>
                                <p className='cart-product-name'>{cartItem.title}</p>
                                <p className='cart-price-sm'>#{cartItem.new_price}</p>
                                <small>* {cartItem.qty}</small>
                            </div>
                        </div>
                        <div className='cart-quantity-md'>
                            <div className='cart-quantity-controls'>
                                <span 
                                    onClick = {reduceQuantity}>-</span>
                                <input  type='number' value={cartItem.qty} readOnly />
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
                                <span className='ti-trash'></span>Remove
                            </div>
                            <div className='cart-quantity-controls-sm'>
                                <span 
                                    onClick={reduceQuantity}>-</span>
                                <input type='number' value={cartItem.qty} readOnly />
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
                    <p># {totalPrice}</p>
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
