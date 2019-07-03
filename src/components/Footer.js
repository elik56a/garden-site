import React from 'react';

const Footer = () => {
    return (

        <div className="footer-container">
            <div className="footer-links">
                <h2 className="footer-title">משרד עורכי דין גבריאל מלאך</h2>
                <a className='footer-link' href="/#">דף הבית</a>
                <a className='footer-link' href="/#">אודות</a><br />
                <a className='footer-link' href="/#">תחומים</a>
                <a className='footer-link' href="/#">צור קשר</a>
            </div>
            <div className="footer-social">
                <h2 className="social-title">עקוב אחרינו</h2>
                <a href="https://www.facebook.com/gavriel.law"><i className="fab fa-facebook footer-icon"></i></a>
                <a href="/#"><i className="fab fa-youtube footer-icon"></i></a>
                <a href="/#"> <i className="fab fa-twitter-square footer-icon"></i></a>
            </div>
            <div className="footer-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNRCyu4DOGXxE2HLxfSxkQjisJ3fkUnk6CCOcsQd2pxPx55hYog" alt="" />
            </div>
        </div>

    )

        ;
}

export default Footer;