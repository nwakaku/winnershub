import d from '../images/a4.jpg';
import e from '../images/a5.jpg';
import f from '../images/a6.jpg';
import g from '../images/a7.jpg';
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Category2 = () => {
    return (
        <section className='section-two'>
            <div className='container'>
                <h2>FOLLOW ON INSTAGRAM</h2>
                <span>@Armor_Lab</span>
                <div className='insta-imgs'>
                    <div>
                        <img src={d} alt='some pictures' />
                        <a href='https://www.instagram.com/armorfashiongroup/'>
                        <div className='icon-overlay flex'>
                            <FaInstagram/>
                        </div>
                        </a>

                    </div>
                    <div>
                        <img src={e} alt='some pictures' />
                        <a href='https://www.instagram.com/armorfashiongroup/'>
                        <div className='icon-overlay flex'>
                        <FaInstagram/>
                        </div>
                        </a>

                    </div>
                    <div>
                        <img src={f} alt='some pictures' />
                        <a href='https://www.instagram.com/armorfashiongroup/'>
                        <div className='icon-overlay flex'>
                        <FaInstagram/>
                        </div>                            
                        </a>

                    </div>
                    <div>
                        <img src={g} alt='some pictures' />
                        <a href='https://www.instagram.com/armorfashiongroup/'>
                        <div className='icon-overlay flex'>
                        <FaInstagram/>
                        </div>                            
                        </a>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category2
