
import React, { Component } from 'react';

class Header extends Component {
    render() {
        window.onscroll = () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY >= 5) {
                nav.classList.add("colored")
                nav.classList.remove("navbar")
            } else {
                nav.classList.remove("colored")
                nav.classList.add("navbar")

            }
        };
        return (
            <nav className='navbar colored-nav' id='navbar'>
                <h1 className='nav-title'> הראל - גינון ותכנון נוף  <br />
                    <img src="https://ibb.co/TMZvjbT" alt='' className='nav-photo' />
                    <span className='nav-small-title'>  כל מה שהגינה שלך צריכה <i class="fab fa-pagelines"></i></span></h1>
                <ul>
                    <li className='nav-link'><a href="/#"><span className='contact-number'>025665170</span></a></li>
                    <li className='nav-link'><a href="#contact-container">צור קשר</a></li>
                    <li className='nav-link'><a href="#subjects-container">פרוייקטים</a></li>
                    <li className='nav-link'><a href="#maininfo-container">אודות</a></li>
                    <li className='nav-link'><a href="/#">ראשי</a></li>
                </ul>
            </nav>
        );
    }
}

export default Header;
