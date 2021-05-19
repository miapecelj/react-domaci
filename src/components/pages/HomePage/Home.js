import React from 'react'
import Pricing from '../../Pricing';
import HeroSection from '../../HeroSection'
import {homeObjTwo, homeObjFour, homeObjOne, homeObjThree} from './Data';

function Home() {
    return (
        <>
          <HeroSection {...homeObjOne} /> 
          <HeroSection {...homeObjThree} /> 
          <HeroSection {...homeObjTwo} /> 
          <Pricing/>
          <HeroSection {...homeObjFour} /> 
        </>
    );
}

export default Home
