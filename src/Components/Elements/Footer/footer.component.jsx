import React from 'react';
import './footer.styles.scss';

import { Facebook } from 'react-feather';
import { Twitter } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Instagram } from 'react-feather';
import { Youtube } from 'react-feather';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='row footer-row'>
                <div className='columns col-md-4 col-xs-12'>
                    <h3 className='text-center'>Connect with us</h3>
                    <div className='sm-list'>
                        <Facebook className='icons' />
                        <Twitter className='icons' />
                        <Linkedin className='icons' />
                        <Instagram className='icons' />
                        <Youtube className='icons' />
                    </div>
                </div>
                <div className='columns col-md-4 col-xs-12'>
                    <h3 className='text-center'>Contact us</h3>
                    <p><span>Tel:</span>080-XXXX-XXXXX</p>
                    <p><span>Email:</span>info@ganl.com</p>
                </div>
                <div className='columns col-md-4 col-xs-12'>
                    <h3 className='text-center'>Address</h3>
                    <p>No 3 Something street near Sars office, Golf Estate</p>
                </div>
            </div>
            <p className='text-center text-copyright'><span>&#169;</span> Copyright 2020. All rights reserved</p>
        </div>
    )
};

export default Footer;