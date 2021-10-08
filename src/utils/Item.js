import e from '../images/a1.jpg';


const Item = ({products}) => {
    return (
        <div className = "product">
                        <div className = "product-content">
                            <div className = "product-img">
                                <img src = {products.img} alt = "product image" />
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
                            <a href = "#" className = "product-name">{products.details}</a>
                            <p className = "product-price">$ 150.00</p>
                            <p className = "product-price">$ 133.00</p>
                        </div>

                        <div className = "off-info">
                            <h2 className = "sm-title">25% off</h2>
                        </div>
                    </div>
    )
}

export default Item
