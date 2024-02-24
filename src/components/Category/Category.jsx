import React from 'react';
import './Category.css';
import FilterSection from '../filterSection/FilterSection';
import ProductSection from '../ProductSection/ProductSection';
import OfficialStore from '../officialStore/OfficialStore';
import CategoryProducts from '../categoryProducts/CategoryProducts';
import CategoryEssay from '../categoryEssay/CategoryEssay';

import Card from '../Cards/Card';

import cardData3 from '../../apiData/cardData3';

import imageFive from '../../apiData/imageFive'


const Category = () => {
  return (
    <div className="container">
      
      <div className="row my-2">
        <div className="col-12 direction"><a href="/" className='text-reset'>Home</a> {' > '} <span> Phone & Tablet</span></div>
      </div>
      <div className="row">
        <div className='box mb-0'>
          <p className="text-center mb-0">Phones & Tablets</p>
        </div>
      </div>
      <div className="row">
        <div className='boxx mb-0'>
          <p className="text-center mb-0 text-white">CALL TO ORDER 07006000000</p>
        </div>
      </div>

      <div className='mt-4'>
      <ProductSection data={imageFive}/>
      <Card data={cardData3} title ='Phone Deals'/>
      <ProductSection data={imageFive}/>
      <OfficialStore/>
      <div className='row'>
        <div className='col-3 d-none d-lg-block'><FilterSection/></div>
        <div className='col-12 col-lg-9 '><CategoryProducts /></div>
      </div>
      <CategoryEssay/>
      </div>
    </div>
  )
}

export default Category