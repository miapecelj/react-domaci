import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
    return (
      <IconContext.Provider value={{ color: '#fff', size: 64 }}>
        <div className='pricing__section'>
          <div className='pricing__wrapper'>
            <h1 className='pricing__heading'>Pricing</h1>
            <div className='pricing__container'>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                  </div>
                  <h3>Starter</h3>
                  <h4>$8.99</h4>
                  <p>per month</p>
                  <ul className='pricing__container-features'>
                    <li>to 150 Mbps</li>
                    <li>150 channels</li>
                    <li>Unifi</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                  </div>
                  <h3>Gold</h3>
                  <h4>$29.99</h4>
                  <p>per month</p>
                  <ul className='pricing__container-features'>
                    <li>to 250Mbps</li>
                    <li>200 channels</li>
                    <li>Unifi</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='blue'>
                    Choose Plan
                  </Button>
                </div>
              </Link>
              <Link to='/sign-up' className='pricing__container-card'>
                <div className='pricing__container-cardInfo'>
                  <div className='icon'>
                  </div>
                  <h3>Diamond</h3>
                  <h4>$50.99</h4>
                  <p>per month</p>
                  <ul className='pricing__container-features'>
                    <li>to 500 Mbps</li>
                    <li>250 channels</li>
                    <li> Unifi</li>
                  </ul>
                  <Button buttonSize='btn--wide' buttonColor='primary'>
                    Choose Plan
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    );
  }
  export default Pricing;