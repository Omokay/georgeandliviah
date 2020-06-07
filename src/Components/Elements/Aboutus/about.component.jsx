import React from 'react';
import ActionButton from '../ActionButton/actionButton.component'
import './about.styles.scss';


const Aboutus = () => {
    return (
        <div className='about-section'>
            <div className='about-pane row'>
                <div className='halves left col-md-6 col-sm-12 col-xs-12'>
                    <h2>About us</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. 
                        It has survived not only five centuries, 
                        but also the leap into electronic typesetting...
                    </p>
                    <div className='buttons'>
                        <ActionButton>Learn more</ActionButton>
                    </div>
                </div>
                <div className=' halves right col-md-6 col-sm-12 col-xs-12'>

                </div>
            </div>
        </div>
    )
};

export default Aboutus;