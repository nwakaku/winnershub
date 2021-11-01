import React, { useState } from 'react';
import e from '../images/a5.jpg';
import BackPreview from './BackPreview';
import PreviewImage from './PreviewImage';
import SidePreview from './SidePreview';
import LeftSide from './LeftSide';
import { Formik, Form, Field } from 'formik';
import { addItemToCart } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';


const Studio = () => {
    const [title, setTitle] = useState();
    const [total, setTotal] = useState();
    const [image, setImage] = useState();
    const [preview, setPreview] = useState();
    const dispatch = useDispatch();
const history =useHistory();


    
    return (
        <>
                <Formik
                    initialValues={{ img: {},
                                     photo2: "",
                                     photo3: "",
                                     photo4: "",
                                     title: '',
                                     sizes: "",
                                     sex: "",
                                     material: "",
                                    numbers: "",
                                    details: "",
                                    new_price: {}
                                 }}
                    onSubmit={(values) => {
                        dispatch(addItemToCart(values));
                        history.push('/cart')
                    }}>
                        {(formProps, values) => (
                            <Form>
                               <div className = "card-wrapper">
                                    <div className = "card">
                                    {/* <!-- card left --> */}
                                    <div className = "product-imgs">
                                    <div className = "img-display">
                                        <div className = "img-showcase">
                                        <img src = {preview ? preview : 'https://thumbs.dreamstime.com/thumblarge_3114/31148795.jpg'} alt = "shoe image"/>
                                        </div>
                                    </div>

                                    {/* formik input */}
                                    
                                        <div className = "img-select">
                                            <div className = "img-item">
                                                <PreviewImage 
                                                    formProps={formProps}
                                                    image={image} 
                                                    setImage={setImage} 
                                                    preview={preview} 
                                                    setPreview={setPreview} />
                                            </div>

                                            {/* second images */}
                                            <div className = "img-item">
                                                <BackPreview 
                                                    formProps={formProps}/>
                                            </div>
                                            {/* third images */}

                                            <div className = "img-item">
                                                <SidePreview
                                                    formProps={formProps}/>
                                            </div>

                                            {/* fourth images */}

                                            <div className = "img-item">
                                                <LeftSide
                                                    formProps={formProps}/>
                                            </div>
                                        </div>
                                    
                                    </div>
                                    {/* <!-- card right --> */}
                                    <div className = "product-content">

                                    <div className = "product-price">
                                        <p className = "last-price">Product</p>
                                        <p className = "last-price">Front Price: <span>$257.00</span></p>
                                        <p className = "new-price">Back Price: <span>$249.00 (5%)</span></p>
                                        <p className = "new-price">Total Price: <span>$249.00 (5%)</span></p>
                                    </div>

                                    <div className = "product-detail">
                                        <textarea 
                                         name="details"
                                         placeholder="what others should we note ..."
                                         onChange={
                                             (e) => {
                                                const word = e.target.value;
                                                setTotal(word);
                                             }
                                         } required/>
                                        <ul>
                                        <li>
                                            <div className='boxy'>
                                                <label for="boxy">Product: </label>
                                                <Field name="title" as="select" onChange={
                                                    (e) => {
                                                        setTitle(e.target.value)
                                                        formProps.setFieldValue('title', e.target.value);
                                                    }
                                                }>
                                                    <option value="T-shirt">T-shirt</option>
                                                    <option value="Hoodie">Hoodie</option>
                                                    <option value="Joggers">Joggers</option>
                                                    <option value="Short">Short</option>
                                                </Field>
                                            </div>                                            
                                         </li>
                                        <li>
                                        <div className='boxy'>
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
                                            <div className='boxy'>
                                                <label for="sex">Sex: </label>
                                                <Field name="sex" as="select">
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </Field>
                                            </div>
                                        </li>
                                        <li>
                                            <div className='boxy'>
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
                                        <div className='boxy'>
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
                                    </div>

                                    <div className = "purchase-info">
                                    
                                                <button className='cart' type='submit'
                                                onClick={
                                                    () => {formProps.setFieldValue('details', total)
                                                            formProps.setFieldValue('img', preview)
                                                        if(title === 'Hoodie'){
                                                            formProps.setFieldValue('new_price', 125)
                                                        }else{
                                                            formProps.setFieldValue('new_price', 100)
                                                        }}
                                                }>
                                                    Add to cart
                                                </button>
                                    </div>

                                    </div>
                                </div>
                            </div>
                            </Form>
                        )}

                </Formik>
            
    </>
    )
}

export default Studio
