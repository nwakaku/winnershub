import React, { useState } from 'react';
import e from '../images/a5.jpg';
import './shop.css';
import { getCartItems } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import ItemPop from './Popup';
import Product from '../data/Product';


const ShopUtils = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const [wish, setWish] = useState()
    const [zoom, setZoom] = useState(true);

    return (
        <>
            <div className='shop'>
            <div className='shop_aside'>
                <ul>
                <li>categories</li>
                <li>categories</li>
                <li>categories</li>
                <li>categories</li>
                <li>categories</li>
                </ul>
            </div>
            <div className='shop_main'>
                <div className="shop_header">
                    <h3>Armor Products</h3>
                </div>
                <div className='shop_container'>
                    {Product.map((data) => 
                        <div className='shop_card' key={data.id}>
                            <div className='card_img'>
                                <img src={data.img} alt='' />
                            </div>
                            <div className='card_details'>
                                <p>{data.title}</p>
                                <p className='card_price'><span>${data.old_price}</span>${data.new_price}</p>
                            </div>
                            <div className='card_Button'>
                                <button
                                onClick={() => {
                                    setWish(data);
                                    setZoom(!zoom)
                                    console.log(cartItems)
                                }}>Preview</button>
                                <button>Comment</button>
                            </div>
                        </div>
                    )}
                    
                    
                </div>
            </div>
        </div>
        <ItemPop wish={wish} setZoom={setZoom} zoom={zoom} addItemToCart={addItemToCart} />

        </>
        
    )
}

export default ShopUtils
