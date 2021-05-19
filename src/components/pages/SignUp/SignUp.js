import React from 'react';
import HeroSection from '../../HeroSection';
import { homeObjects } from '../../../store/Data';

function SignUp() {
  return (
    <>
      {homeObjects.map((obj) => {
        if (obj.title === "homeObjOne" || obj.title === "homeObjThree") {
          return <HeroSection {...obj} />
        }
      })}
    </>
  );
}

export default SignUp;
