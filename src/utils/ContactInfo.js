import {FaCouch, FaIdBadge, FaEnvelope, FaIndustry} from 'react-icons/fa'

const ContactInfo = () => {
    return (
        <section className='section-five'>
            <div className='container'>
                <div className='contact-top'>
                    <h3>CONTACT ME</h3>
                    <p>Please contact me in other
                        to encourage me,this is very
                        important.
                    </p>
                </div>

                <div className='contact-middle'>
                    <div>
                        <span className='contact-icon'>
                            <i><FaIndustry/></i>
                        </span>
                        <span>Address</span>
                        <p>Main Street --3456, New Umuahia road</p>
                    </div>

                    <div>
                        <span className='contact-icon'>
                            <i><FaIdBadge/></i>
                        </span>
                        <span>Contact Number</span>
                        <p>4567 3485 2902</p>
                    </div>

                    <div>
                        <span className='contact-icon'>
                            <i><FaEnvelope/></i>
                        </span>
                        <span>Email Address</span>
                        <p>Wisdom@gmail.com</p>
                    </div>

                    <div>
                        <span className='contact-icon'>
                            <i><FaCouch/></i>
                        </span>
                        <span>Websites</span>
                        <p>www.armor_lab.com</p>
                    </div>
                </div>

                <div className='contact-bottom'>
                    <form className='form'>
                        <input type='text' placeholder='Your Name'/>
                        <input type='email' placeholder='Your Email'/>
                        <input type='text' placeholder='Subject'/>
                        <textarea rows='9' placeholder='Message'/>
                        <input type='submit'  className='btn' value='Send Message'/>
                    </form>

                    {/* Map */}
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo
