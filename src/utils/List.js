const List = () => {
    return (
        <>
            <div className='cart-item'>
                    <form >
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
                                <span 
                                    onClick = {reduceQuantity}>-</span>
                                <input  type='number' value={quantity} readOnly />
                                <span 
                                    onClick = {addQuantity}>+</span>
                            </div>
                        </div>
                        <div className='cart-unit-price'>
                            <h4>#{cartItem.price * quantity}</h4>
                        </div>
                        <div className='cart-product-total'>
                            <h4>#1,250</h4>
                        </div>
                        <div className='cart-controls-sm'>
                            <div className='remove'>
                                <span className='ti-trash'></span>Remove
                            </div>
                            <div className='cart-quantity-controls-sm'>
                                <span 
                                    onClick={reduceQuantity}>-</span>
                                <input type='number' value={quantity} readOnly />
                                <span 
                                    onClick = {addQuantity}>+</span>
                            </div>
                        </div>
                    </form>
                </div> 
        </>
    )
}

export default List
