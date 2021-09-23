import eg from '../images/eg.jpg'

const About = () => {
    return (
        <div className='container about'>
            <div className='about-content'>
                <div className='about-img flex'>
                    <img src={eg} alt='' />
                </div>
                <h2>ARMOR LAB</h2>
                <h3>DESIGNER || FASHION</h3>
                <blockquote>
                    "Designing is a way of feeling, of touching,
                    of loving. What you have caught on film is
                     captured forever ... It remembers little things
                    long after you have forgotten everything."
                    <span>-Aaron Siskind</span>
                </blockquote>
            </div>

            <div className='social-icons'>
                <ul>
                    <li>
                        <a href='#'><i>ul</i></a>
                    </li>
                    <li>
                        <a href='#'><i>ul</i></a>
                    </li>
                    <li>
                        <a href='#'><i>ul</i></a>
                    </li>
                    <li>
                        <a href='#'><i>ul</i></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default About
