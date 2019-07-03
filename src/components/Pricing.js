import React from 'react';

const Pricing = () => {
    return (

        <div className="pricing-container">
            <div className="pricing-card">
                <i className="fas fa-award fa-3x pricing-img"></i>
                <h3 className="pricing-title">ניסיון</h3>
                <p className='pricing-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis pariatur id aut. Officiis accusamus earum omnis, aperiam consequuntur quasi itaque.</p>
            </div>
            <div className="pricing-card">
                <i className="far fa-handshake fa-3x pricing-img"></i>
                <h3 className="pricing-title">אמינות</h3>
                <p className='pricing-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis pariatur id aut. Officiis accusamus earum omnis, aperiam consequuntur quasi itaque.</p>
            </div>
            <div className="pricing-card">
                <i className="fas fa-user-friends  pricing-img"></i>
                <h3 className="pricing-title">יחס אישי</h3>
                <p className='pricing-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis pariatur id aut. Officiis accusamus earum omnis, aperiam consequuntur quasi itaque.</p>
            </div>
            <div className="pricing-card">
                <i className="fas fa-shekel-sign fa-3x pricing-img"></i>
                <h3 className="pricing-title">מחירים נוחים</h3>
                <p className='pricing-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis pariatur id aut. Officiis accusamus earum omnis, aperiam consequuntur quasi itaque.</p>
            </div>
        </div>

    )

        ;
}

export default Pricing;