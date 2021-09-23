import eg from '../images/eg.jpg'

const Category2 = () => {
    return (
        <section className='section-two'>
            <div className='container'>
                <h2>FOLLOW ON INSTAGRAM</h2>
                <span>@Armor_Lab</span>
                <div className='insta-imgs'>
                    <div>
                        <img src={eg} alt='some pictures' />
                        <div className='icon-overlay flex'>
                            <i>ul</i>
                        </div>
                    </div>
                    <div>
                        <img src={eg} alt='some pictures' />
                        <div className='icon-overlay flex'>
                            <i>ul</i>
                        </div>
                    </div>
                    <div>
                        <img src={eg} alt='some pictures' />
                        <div className='icon-overlay flex'>
                            <i>ul</i>
                        </div>
                    </div>
                    <div>
                        <img src={eg} alt='some pictures' />
                        <div className='icon-overlay flex'>
                            <i>ul</i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category2
