
import React, { Component } from 'react';


class Video extends Component {
    state = {
        newsPhotos: [
            {
                img: 'https://static.wixstatic.com/media/c90499_a69775d399844345bc9933288daa37ba.jpg/v1/fill/w_452,h_381,al_c,q_80,usm_0.66_1.00_0.01/c90499_a69775d399844345bc9933288daa37ba.webp'
            },
            {
                img: 'https://static.wixstatic.com/media/c90499_e70650c2676848af8ca4ab18fc718d57.jpg/v1/fill/w_651,h_490,al_c,q_90,usm_0.66_1.00_0.01/c90499_e70650c2676848af8ca4ab18fc718d57.webp'
            },
            {
                img: 'https://static.wixstatic.com/media/c90499_afc181aa858541cd8304ddaa0a81e45a.jpg/v1/fill/w_444,h_636,al_c,q_80,usm_0.66_1.00_0.01/c90499_afc181aa858541cd8304ddaa0a81e45a.webp'
            },
            {
                img: 'https://static.wixstatic.com/media/c90499_27b75dc9fa3c4b10acc1c5152e147d68.jpg/v1/fill/w_478,h_490,al_c,q_90,usm_0.66_1.00_0.01/c90499_27b75dc9fa3c4b10acc1c5152e147d68.webp'
            },
            {
                img: 'https://static.wixstatic.com/media/c90499_c5c2a24ce612470ca8382be97b4061f4.jpg/v1/fill/w_430,h_490,al_c,q_90,usm_0.66_1.00_0.01/c90499_c5c2a24ce612470ca8382be97b4061f4.webp'
            }
        ]
    }



    render() {
        return (
            <div className='video-container slider'>
                <h1 className="video-title">מן העיתונות</h1>
                <hr className='title-hr'></hr>

                <div className="news-img first">
                    <img src={this.state.newsPhotos[3].img} alt="" />
                </div>
                <div className="news-img second">
                    <img src={this.state.newsPhotos[1].img} alt="" />
                </div>
                {/* <div className="news-img">
                    <img src={this.state.newsPhotos[0].img} alt="" />
                </div>
                <div className="news-img">
                    <img src={this.state.newsPhotos[4].img} alt="" />
                </div> */}

            </div>
        );
    }
}

export default Video;

{/* <p className="video-text">צפו בעו"ד גבריאל מלאך מתראיין בנושא רשלנות רפואית, תאונות עבודה ותביעות נזיקין נוספות</p>
                <div className="video">
                    <iframe title='lawyer' width="800" height="387" src="https://www.youtube.com/embed/hVd4h8tlaxo" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> */}