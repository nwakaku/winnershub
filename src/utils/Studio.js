import React from 'react';
import e from '../images/a5.jpg';
import BackPreview from './BackPreview';
import PreviewImage from './PreviewImage';
import SidePreview from './SidePreview';
import LeftSide from './LeftSide';

const Studio = () => {
    
    return (
        <>
            <div className = "card-wrapper">
                <div className = "card">
                {/* <!-- card left --> */}
                <div className = "product-imgs">
                <div className = "img-display">
                    <div className = "img-showcase">
                    <img src = 'https://thumbs.dreamstime.com/thumblarge_3114/31148795.jpg' alt = "shoe image"/>
                    </div>
                </div>
                    <div className = "img-select">
                        <div className = "img-item">
                            <PreviewImage/>
                        </div>

                        {/* second images */}
                        <div className = "img-item">
                            <BackPreview/>
                        </div>
                        {/* third images */}

                        <div className = "img-item">
                            <SidePreview/>
                        </div>

                        {/* fourth images */}

                        <div className = "img-item">
                            <LeftSide/>
                        </div>
                    </div>
                
                </div>
                {/* <!-- card right --> */}
                <div className = "product-content">

                <div className = "product-price">
                    <p className = "last-price">Product: <span> Hoodie </span></p>
                    <p className = "last-price">Front Price: <span>$257.00</span></p>
                    <p className = "new-price">Back Price: <span>$249.00 (5%)</span></p>
                    <p className = "new-price">Total Price: <span>$249.00 (5%)</span></p>
                </div>

                <div className = "product-detail">
                    <textarea placeholder="what others should we note ..."/>
                    <ul>
                    <li>Product: <span>T-shirt</span></li>
                    <li>Size: <span>XXL</span></li>
                    <li>Sex: <span>Male</span></li>
                    <li>Material: <span>Cotton</span></li>
                    <li>Shipping Fee: <span>Free</span></li>
                    </ul>
                </div>

                <div className = "purchase-info">
                    <input type = "number" min = "0" value = "1"/>
                    <button type = "button" className = "btn">
                    Add to Cart <i className = "fas fa-shopping-cart"></i>
                    </button>
                    <button type = "button" className = "btn">Compare</button>
                </div>

                </div>
            </div>
        </div>
    </>
    )
}

export default Studio
