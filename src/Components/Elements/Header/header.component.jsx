import React, { Component } from 'react';
import './header.styles.scss';



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navbackground: 'top-nav'
        };
    }

    componentDidMount() {
        window.addEventListener('scroll', (event) => {
            // handle the scroll event 
            const top = event.target.documentElement.scrollTop;
            if (top > 150) {
                this.setState({
                    navbackground: 'top-nav light-header'
                });
            }
            else if (top <= 150) {
                this.setState({
                    navbackground: 'top-nav'
                });
            }
        });
    }

    render() {
        return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-light light-bg fixed-top ${this.state.navbackground}`}>
                    <a className='navbar-brand' href='#'><strong>GEORGE & LIVIAH</strong></a>
                    <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'>
                        </span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item active'>
                                <a className='nav-link' href='#'>Home</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>About us</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Services</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Events </a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Leadership</a>
                            </li>
                            <li className='nav-item'>
                                <a className='nav-link' href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div >
        )

    }

}

export default Header;