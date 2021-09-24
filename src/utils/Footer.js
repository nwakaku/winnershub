import { FaMailBulk } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container container'>
                <div>
                    <h2>ARMOR_LAB</h2>
                    <p>This is basically a software 
                        designing app that illustarte the 
                        importants of designing from the core 
                        especially when it come to fundamental 
                    </p>
                </div>
                <div>
                    <h3>Free Subscription!</h3>
                    <p>For mass order drop us a mail..
                        we promise to reply immediately
                    </p>
                    <div className='subs'>
                        < FaMailBulk/>
                        <input type='email' id='email' 
                        placeholder='Email Address'/>
                        <button type='submit'>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <p>&copy; Copyright Armor_Lab . This is a subsidiary of ARMOR_BRAND</p>
        </footer>
    )
}

export default Footer
