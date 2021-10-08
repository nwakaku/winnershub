import React from 'react';
import Product from '../data/Product';
import e from '../images/a5.jpg';
import { getCartItems } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../features/cart/cartSlice';
import { useSelector } from 'react-redux';



const ProductUtils = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);

    return (
        <>
             <div className = "products">
            <div className = "container">
                <h1 className = "lg-title">Armor Special With Offers</h1>

                <div className = "product-items">
                    {/* <!-- single product --> */}
                    {Product.map((data) => 
                        <div className = "product">
                            <div className = "product-content">
                                <div className = "product-img">
                                    <img src = {data.img} alt = "product image" />
                                </div>
                                <div className = "product-btns">
                                    <button 
                                        type = "button" 
                                        className = "btn-cart"
                                        onClick={() => {
                                            dispatch(addItemToCart(data))
                                        }}> add to cart
                                        <span><i className = "fas fa-plus"></i></span>
                                    </button>
                                    <button type = "button" className = "btn-buy"> buy now
                                        <span><i className = "fas fa-shopping-cart"></i></span>
                                    </button>
                                </div>
                            </div>

                            <div className = "product-info">
                                <div className = "product-info-top">
                                    <h2 className = "sm-title">{data.title}</h2>
                                    <div className = "rating">
                                        <span><i className = "fas fa-star"></i></span>
                                        <span><i className = "fas fa-star"></i></span>
                                        <span><i className = "fas fa-star"></i></span>
                                        <span><i className = "fas fa-star"></i></span>
                                        <span><i className = "far fa-star"></i></span>
                                    </div>
                                </div>
                                <a href = "#" className = "product-name">{data.details}</a>
                                <p className = "product-price">$ {data.old_price}</p>
                                <p className = "product-price">$ {data.new_price}</p>
                            </div>

                            <div className = "off-info">
                                <h2 className = "sm-title">{data.percent}</h2>
                            </div>
                        </div>
                    )}
                    
                    {/* <!-- end of single product --> */}
                    {/* <!-- single product --> */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {e} alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">lifestyle</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">mens shoes DN 23XX, new product</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                    {/* <!-- single product --> */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {e} alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">lifestyle</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">mens shoes DN 23XX, new product</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                    {/* <!-- single product --> */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {e} alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">lifestyle</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">mens shoes DN 23XX, new product</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>

                        <div className = "off-info">
                            <h2 className = "sm-title">25% off</h2>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                    {/* <!-- single product --> */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {e} alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">lifestyle</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">womens shoes DN 23XX, new product</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                    {/* <!-- single product --> */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {e} alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">lifestyle</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">womens shoes DN 23XX, new product</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                    {/* <!-- single product --> */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {e} alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">lifestyle</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">womens shoes DN 23XX, new product</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                    {/* <!-- single product --> */}
                    <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {e} alt = "product image"/>
                            </div>
                            <div className = "product-btns">
                                <button type = "button" className = "btn-cart"> add to cart
                                    <span><i className = "fas fa-plus"></i></span>
                                </button>
                                <button type = "button" className = "btn-buy"> buy now
                                    <span><i className = "fas fa-shopping-cart"></i></span>
                                </button>
                            </div>
                        </div>

                        <div className = "product-info">
                            <div className = "product-info-top">
                                <h2 className = "sm-title">lifestyle</h2>
                                <div className = "rating">
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "fas fa-star"></i></span>
                                    <span><i className = "far fa-star"></i></span>
                                </div>
                            </div>
                            <a href = "#" className = "product-name">womens shoes DN 23XX, new product</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>

                        <div className = "off-info">
                            <h2 className = "sm-title">35% off</h2>
                        </div>
                    </div>
                    {/* <!-- end of single product --> */}
                </div>
                {/* pagination div */}
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
        
    
        </>
    )
}

export default ProductUtils
