import React from 'react';
import './homepage.styles.scss';
import Header from '../Elements/Header/header.component';
import Hero from '../Elements/Hero/hero.component';
import Aboutus from '../Elements/Aboutus/about.component';

const Homepage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Aboutus />
        </div>
    )
}

export default Homepage;