import React from 'react';
import './homepage.styles.scss';
import Header from '../Elements/Header/header.component';
import Hero from '../Elements/Hero/hero.component';
import Aboutus from '../Elements/Aboutus/about.component';
import Footer from '../Elements/Footer/footer.component'

const Homepage = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Aboutus />
            <Footer />
        </div>
    )
}

export default Homepage;