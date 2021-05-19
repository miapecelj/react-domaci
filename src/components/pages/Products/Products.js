import React from 'react'
import HeroSection from '../../HeroSection'
import Pricing from '../../Pricing';
import { homeObjOne,homeObjTwo} from './Data';

function Products() {
    return (
      <>
        <HeroSection {...homeObjOne} />
        <HeroSection {...homeObjTwo} />
      </>
    );
  }
  
  export default Products;