import React from 'react';
import './Category.css';
import FilterSection from '../filterSection/FilterSection';
import ProductSection from '../ProductSection/ProductSection';
import OfficialStore from '../officialStore/OfficialStore';
import CategoryProducts from '../categoryProducts/CategoryProducts';
import CategoryEssay from '../categoryEssay/CategoryEssay';
import LinkSection from '../LinkSection/LinkSection';
import Categories from '../Categories/Categories';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Card from '../Cards/Card';
import cardData1 from '../../apiData/cardData'
import cardData2 from '../../apiData/cardData1';
import cardData3 from '../../apiData/cardData3';
import cardData4 from '../../apiData/cardData4';
import cardData5 from '../../apiData/CardData5';
import cardData6 from '../../apiData/cardData6';
import imageOne from '../../apiData/imageOne'
import imageTwo from '../../apiData/imageTwo'
import imageThree from '../../apiData/imageThree'
import imageFour from '../../apiData/imageFour'
import imageFive from '../../apiData/imageFive'
import imageSix from '../../apiData/imageSix'
import imageSeven from '../../apiData/imageSeven'
import imageEight from '../../apiData/imageEight'
import imageNine from '../../apiData/imageNine'


const Category = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">Banner</div>
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
    </div>
  )
}

export default Category