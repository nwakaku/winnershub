import React, { useState } from 'react';
import e from '../images/a5.jpg';
import './shop.css';
import { getCartItems } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';
import ItemPop from './Popup';
import Product from '../data/Product';
import {FaReact, FaStar} from 'react-icons/fa'
import {BiLogOut} from 'react-icons/bi'


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
                    <li className='active'>categories  <span className='now'><FaReact/></span></li>
                    <li>Hoodies  <span><FaReact/></span></li>
                    <li>Joggers  <span><FaReact/></span></li>
                    <li>Tee Shirts  <span><FaReact/></span></li>
                    <li>Combat Short  <span><FaReact/></span></li>
                    <li>Shirts  <span><FaReact/></span></li>
                    <li>Trousers  <span><FaReact/></span></li>
                    <li>Jeans  <span><FaReact/></span></li>
                    <li>Overall Gowns  <span><FaReact/></span></li>
                </ul>
                <div className='logout'>
                    <h3>logout</h3>
                    <h3><BiLogOut/></h3>
                    
                </div>
            </div>
            <div className='shop_main'>
                <div className="shop_header">
                    <div>
                        <h3>Armor Products</h3>
                        <p>Don't miss it out today, get free Next Day delivery on all of your orders.</p>
                        <button> Browse product</button>
                    </div>
                   
                </div>
                <div className='shop_container'>
                    {Product.map((data) => 
                        <div className='shop_card' key={data.id}
                        onClick={() => {
                            setWish(data);
                            setZoom(!zoom)
                        }}>
                            <div className='card_img'>
                                <img src={data.img} alt='' />
                            </div>
                            <div className='card_details'>
                                <p>{data.title}</p>
                                <p className='card_price'><span>${data.old_price}</span>${data.new_price}</p>
                                <div className='stars'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div>
                            </div>
                            {/* <div className='card_Button'>
                                <button
                                >Preview</button>
                                <button>Comment</button>
                            </div> */}
                        </div>
                    )}

            <div className='sneaker__pages bd-grid'>
                <div>
                    <span className='sneaker__pag'>1</span>
                    <span className='sneaker__pag'>2</span>
                    <span className='sneaker__pag'>3</span>
                    <span className='sneaker__pag'>4</span>
                    <span className='sneaker__pag'>&#8594;</span>
                </div>
            </div>
                    
                    
                </div>
            </div>
        </div>
        <ItemPop wish={wish} setZoom={setZoom} zoom={zoom} addItemToCart={addItemToCart} />

        </>
        
    )
}

export default ShopUtils
