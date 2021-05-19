import React from 'react';
import './Footer.css';
import { Button } from '../../Button';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join our exclusive membership to receive the latest news and trends
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button onClick={subscribeHandler} buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
}
const subscribeHandler = () => {
  alert("Succesfully subscribed!");
}

export default Footer;