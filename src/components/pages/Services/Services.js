import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjects } from '../../../store/Data';
import Pricing from '../../Pricing';

function Services() {
  return (
    <>
      <Pricing />
      {homeObjects.map((obj) => {
        if (obj.title === "homeObjOne" || obj.title === "homeObjThree") {
          return <HeroSection {...obj} />
        }
      })}
    </>
  );
}

export default Services;
