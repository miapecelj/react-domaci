import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjects} from '../../../store/Data';

function Products() {
    return (
      <>
        {homeObjects.map((obj) => {
          if(obj.title === "homeObjOne" || obj.title === "homeObjTwo") {
            return <HeroSection {...obj} />
          }
        })}
      </>
    );
  }
  
  export default Products;