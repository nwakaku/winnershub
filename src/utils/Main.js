import {  Link } from 'react-router-dom';


const Main = () => {
    return (
        <section className='section-one'>
            <div className='container'>
                <div className='sec-one-left'>
                    {/* image here */}
                    <div>
                        <h3>About our basic works...</h3>
                        <p>"Fashion is like eating, you shouldn't stick to the same menu."
                        —Kenzo Takada
                        </p>
                        <Link to='/product' className='btn'>Shop</Link>
                    </div>
                </div>

                <div className='sec-one-right'>
                    <div className='work-content'>
                        <h3>AMAZING TEAM WORK WITH PROFESSIONAL 
                            PHOTOGRAPHER
                        </h3>
                        <p>
                           Fashion is not something that exist in dresses only. 
                           Fashion is in the sky in the street,
                           Fashion has to do with ideas the way we live,
                           what is happening
                        </p>
                        <Link to='/gallery' className='btn'>gallery</Link>
                    </div>
                    <div className='work-imgs'>
                        <div className='work-img-1'>
                            {/* image here */}

                        </div>
                        <div className='work-img-2'>
                            {/* image here */}
                        </div>
                    </div>
                    <h3>
                    "Elegance is not standing out, but being remembered." —Giorgio Armani
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Main
