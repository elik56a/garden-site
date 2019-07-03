import React from 'react';

const Contact = () => {
    return (
        <div className="contact-container" id='contact-container'>
            <h1 className="contact-title"> צור קשר</h1>
            <hr className='title-hr'></hr>
            <div className="form-container">
                <form name="contact" netlify-honeypot="bot-field" data-netlify="true">

                    <div className="row">
                        <input className="user-name" type="text" id="fullname" name="userName" placeholder="שם מלא" />
                    </div>

                    <div className="row">
                        <input className="phone" type="text" id="phone" name="phone" placeholder="מספר טלפון." />
                    </div>
                    <div className="row">
                        <textarea id="subject" name="subject" placeholder="תוכן ההודעה..."></textarea>
                    </div>
                    <div className="row">
                        <input type="submit" value="שלח" name='submit' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;