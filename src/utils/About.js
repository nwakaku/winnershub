import eg from '../images/eg.jpg';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaPinterest } from 'react-icons/fa';

const About = () => {
    return (
        <div className='container about'>
            <div className='about-content'>
                <div className='about-img flex'>
                    <img src='https://images.unsplash.com/photo-1616844868137-7ffaf43c2d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=385&q=80' alt='' />
                </div>
                <h2>ARMOR</h2>
                <h3>DESIGNER || FASHION</h3>
                <blockquote>
                "Fashion is the armor to survive the reality of everyday life."
                    <span>-Bill Cunningham</span>
                </blockquote>
            </div>

            <div className='social-icons'>
                <ul>
                    <li>
                        <a href='#'><FaInstagram/></a>
                    </li>
                    <li>
                        <a href='#'><FaFacebookSquare/></a>
                    </li>
                    <li>
                        <a href='#'><FaWhatsapp/></a>
                    </li>
                    <li>
                        <a href='#'><FaPinterest/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
