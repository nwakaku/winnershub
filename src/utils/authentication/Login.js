import React,{ useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import TextError from './TextError';
import { Link, useHistory } from "react-router-dom";
import {FaTwitter, FaFacebookF, FaGooglePlus} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { login } from '../../features/user/user';



const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false)


const initialValues = {
    email: '',
    password: '',
}

const onSubmit= (values, { setSubmitting }) => {
    dispatch(login(values));
    setSubmitting(false);
    history.push('/profile')
    console.log(values)
    // setTimeout(() => {
    //   alert(JSON.stringify(values, null, 2));
    //   setSubmitting(false);
    // }, 400);
  }
      
  


const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
}) 

    if(loading){
        return (
            <div>Loading...</div>
        )  
    }
    else{
        return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            <div className='body'>
                 <div className='form'>
                <Form>
                    <div className='form-logo'>
                        <Link to='/'><h2>Armor_lab</h2></Link>
                        {error ? <p className='form-error'>{error}</p>: null }
                    </div>

                    
                    <div className='form-group'>
                        <Field 
                            placeholder='Email please'
                            type='text' id='email' name='email' className='form-input'/>
                        <ErrorMessage name='email' component={TextError}/>
                    </div>  
                                
                   <div className='form-group'>
                        <Field 
                            placeholder='Your Password'
                            type='password' id='password' name='password' className='form-input'/>
                        <ErrorMessage name='password' component={TextError}/>
                    </div>

                    <div className="form-group">
                    <button className="form-btn" disabled={loading}  type='submit'>Log in</button>
                    </div>


                    <span className="form-delimiter">
                                or connect with
                            </span>
                            <div className="form-social">
                                <a href="#" className="form-social-item fb">
                                <FaFacebookF/>
                                </a>
                                <a href="#" className="form-social-item tw">
                                <FaTwitter/>
                                </a>
                                <a href="#" className="form-social-item gg">
                                <FaGooglePlus/>
                                </a>
                            </div>
                            <span className="form-txt">
                                Don't have an account?
                                <Link to='/signup'>Register</Link>
                            </span>
                            <span className="form-txt">
                                <a href="#">Forgot password?</a>
                            </span>
                </Form>
            
            </div>
            </div>

           
                
        </Formik>
    )
    }
        
}

export default Login
