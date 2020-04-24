import React from 'react';
import './hero.styles.scss';


const Hero = () => {
    
    return (
        <div className='hero bg-overlay-light'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='pt-40'>George & Liviah Academy
                        <br /><span className='accent'>A Journey</span> to <span className='accent'>Excellence</span>
                        </h2>
                        <p>We will guide your steps.</p>
                        <a href='#' className='hero-btn'>Learn  More</a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Hero;