import React from 'react'
import a from '../images/a1.jpg';
import b from '../images/a2.jpg';
import c from '../images/a3.jpg';
import d from '../images/a4.jpg';
import e from '../images/a5.jpg';
import f from '../images/a6.jpg';
import g from '../images/a7.jpg';
import h from '../images/a8.jpg';
import i from '../images/a9.jpg';
import j from '../images/a10.jpg';
import k from '../images/a11.jpg';
import l from '../images/a12.jpg';
import { SRLWrapper } from "simple-react-lightbox";

const Menu = () => {
    return (
        <section className='section-three'>
            <div className='container'>
                <div className='menu_header'>
                    <h2 >OUR WORKS</h2>
                    <span>@Armor_Lab</span> 
                </div>
                
                <SRLWrapper>
                <div className='gallery'>
                    <a href = {j}>
                        <div className='single-img'>
                            <img src={j} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Armor_Lab Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {k}>
                        <div className='single-img'>
                            <img src={k} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {l}>
                        <div className='single-img'>
                            <img src={l} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Charge And Bell</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {d}>
                        <div className='single-img'>
                            <img src={d} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Perfect Understanding</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {e}>
                        <div className='single-img'>
                            <img src={e} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Creativity_Hub</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {f}>
                        <div className='single-img'>
                            <img src={f} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Abstract Design</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {g}>
                        <div className='single-img'>
                            <img src={g} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Armor || Shield</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {h}>
                        <div className='single-img'>
                            <img src={h} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Winner || Armor</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {i}>
                        <div className='single-img'>
                            <img src={i} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {j}>
                        <div className='single-img'>
                            <img src={j} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Beautiful Work</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {k}>
                        <div className='single-img'>
                            <img src={k} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Cheap || Clerk</h3>
                            </div>
                        </div>
                    </a>

                    <a href = {l}>
                        <div className='single-img'>
                            <img src={l} alt='gallery image'/>
                            <div className='single-img-content'>
                                <h3>Armor Brandee</h3>
                            </div>
                        </div>
                    </a>
                </div>
                </SRLWrapper>

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
        </section>
    )
}

export default Menu
