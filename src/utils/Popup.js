import React, { useState } from 'react';
import './items.css';
import e from '../images/a5.jpg';
import { useDispatch,} from 'react-redux';
import { addItemToCart,reduceItemInCart, } from '../features/cart/cartSlice';





const ItemPop = ({zoom , setZoom, wish, addToWish}) => {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1)


    return (
            <div>
                {
                    wish ? 
                    <div className={`${zoom ?"popup hide__popup" : 'popup'}`}>
                    <div className='producty'>
                        <div className='images'>
                            <div className='slider'>
                                <img src={wish.img} alt=''/>
                            </div>
                            <div className='thumbnail'>
                                <div className='thumb active'>
                                    <img src={wish.img} alt='' />
                                </div>
                                <div className='thumb'>
                                    <img src={wish.img} alt='' />
                                </div>
                                <div className='thumb'>
                                    <img src={wish.img} alt='' />
                                </div>
                                <div className='thumb'>
                                    <img src={wish.img} alt='' />
                                </div>
                            </div>
                        </div>
                        <div className='info'>
                            <h3>Name: {wish.title}</h3>
                            <div className='rating'>
                                <p>Details: {wish.details}</p>
                                <p>Percentage_Off: {wish.percent}</p>
                            </div>
                            <h4 className='price'>
                              Price: <span>${wish.old_price}</span>
                            ${wish.new_price}</h4>
                            <h4 className='title'>Color</h4>
                            <div className='colors'>
                                <span className='color green'></span>
                                <span className='color orange'></span>
                                <span className='color pink'></span>
                            </div>
                            <h4 className='title'>Size</h4>
                            <div className='sizes'>
                                <span className='size'>XS</span>
                                <span className='size'>S</span>
                                <span className='size'>M</span>
                                <span className='size'>L</span>
                                <span className='size'>XL</span>
                            </div>
                            <h4 className='title'>Qty</h4>
                            <div className='cart-quantity-controls'>
                                <span 
                                    onClick = {() => {
                                        dispatch(reduceItemInCart(wish))
                                    }}>-</span>
                                <input  type='text' value={wish.qty} readOnly />
                                <span 
                                    onClick = {()=>
                                        dispatch(addItemToCart(wish))
                                        }>+</span>
                            </div>
                            <button className='cart'
                                onClick={()=>{
                                    setZoom(!zoom);
                                    dispatch(addItemToCart(wish))
                                }
                                    
                                }>Add to cart</button>
                        </div>
                    </div>
                    
                </div> : <div>loading</div>
                }
            </div>
   
    )
}

export default ItemPop
