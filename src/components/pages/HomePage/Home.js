import React from 'react'
import Pricing from '../../Pricing';
import HeroSection from '../../HeroSection'
import { homeObjects } from '../../../store/Data';

function Home() {
  return (
    <>
      {homeObjects.map((obj) => {
          return <HeroSection {...obj} />
      })}
      <Pricing />
    </>
  );
}

export default Home
