import React, { useState } from 'react';
import './items.css';
import e from '../images/a5.jpg';
import { useDispatch,} from 'react-redux';
import { addItemToCart,reduceItemInCart, } from '../features/cart/cartSlice';
import { Field, Formik } from 'formik';





const ItemPop = ({zoom , setZoom, wish, addToWish}) => {
    const dispatch = useDispatch();
    


    return (
        <Formik>
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
                            
                            {/* details and illustration */}
                            <ul>
                                    <li>
                                        <div className='boxy popup_div'>
                                                <label for="sizes">Sizes: </label>
                                                <Field name="sizes" as="select">
                                                    <option value="xxl">XXL</option>
                                                    <option value="xl">XL</option>
                                                    <option value="l">L</option>
                                                    <option value="m">M</option>
                                                    <option value='s'>S</option>
                                                    <option value='xs'>XS</option>
                                                    <option value='custom'>Custom</option>
                                                </Field>
                                            </div>        
                                    </li>
                                        <li>
                                            <div className='boxy popup_div'>
                                                <label for="sex">Sex: </label>
                                                <Field name="sex" as="select">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </Field>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='boxy popup_div'>
                                                <label for="material">Material: </label>
                                                <Field name="material" as="select">
                                                    <option value="cotton">Cotton</option>
                                                    <option value="chiffon">Chiffon</option>
                                                    <option value="crepe">Crepe</option>
                                                    <option value="denim">Denim</option>
                                                    <option value='satin'>Satin</option>
                                                </Field>
                                            </div>
                                        </li>
                                        <li>Shipping Fee: <span>Free</span></li>
                                        <li>
                                        <div className='boxy popup_div'>
                                                <label for="numbers">Qty: </label>
                                                <Field name="numbers" as='select' type='number'>
                                                    <option value={1}>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value='5'>5</option>
                                                    <option value='6'>6</option>
                                                    <option value='7'>7</option>
                                                </Field>
                                            </div>
                                        </li>
                                        </ul>
                            <button className='cart'
                                onClick={()=>{
                                    setZoom(!zoom);
                                    dispatch(addItemToCart(wish))
                                }
                                    
                                }>Add to cart</button>
                        </div>
                    </div>
                    
                </div> : null
                }
            </div>
        </Formik>
            
   
    )
}

export default ItemPop
