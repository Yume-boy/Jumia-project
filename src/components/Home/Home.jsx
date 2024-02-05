import React from 'react'
import './Home.css'
import LinkSection from '../LinkSection/LinkSection';
import Categories from '../Categories/Categories';
import ProductSection from '../ProductSection/ProductSection';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Card from '../Cards/Card';
import Essay from '../Essay/Essay';

function Home() {
  return (
    <div>
      <LinkSection />
      <Categories />
      <ProductSection />
      <BannerCarousel />
      <Card/>
      <Essay />
    </div>
  );
}


export default Home