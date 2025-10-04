import React from 'react';
import './NewsLetter.css';

function NewsLetter(props) {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers on Your Email</h1>
            <p>Subscribe to our newletter and stay updated</p>
            <div>
                <input type='email' placeholder=' Your email id' />
                <button type='submit' className='submit'>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;