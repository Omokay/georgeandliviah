import React from 'react';
import allData from './gallery-data';
import './gallery.styles.scss';

const Gallery = () => {

    const [...images] = allData;
    console.log(images);
    return (
        <div className='gallery-page'>
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