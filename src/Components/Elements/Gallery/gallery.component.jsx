import React from 'react';
import allData from './gallery-data';
import ActionButton from '../../Elements/ActionButton/actionButton.component';
import './gallery.styles.scss';

const Gallery = () => {

    const [...images] = allData;
    console.log(images);
    return (
        <div className='gallery-page'>
            {/* <ActionButton className='gallery-btn'>View more</ActionButton> */}
            <div className='gallery-row'>
                {images.map((item) => (
                    <div className='gallery-column'>
                        <img alt ='image' key={item.id} src={item.imageUrl} />
                </div>
            )
                )}
            </div>
        </div>
    )
};

export default Gallery;