import React from 'react'
import eg from '../images/eg.jpg';
import { SRLWrapper } from "simple-react-lightbox";

const Menu = () => {
    return (
        <section className='section-three'>
            <div className='container'>
                <SRLWrapper>
                <div className='gallery'>
                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {eg}>
                        <div className='single-img'>
                            <img src={eg} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>
                </div>
                </SRLWrapper>
                
            </div>
        </section>
    )
}

export default Menu
