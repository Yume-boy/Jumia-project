import './Home.css'
import LinkSection from '../LinkSection/LinkSection';
import Categories from '../Categories/Categories';
import ProductSection from '../ProductSection/ProductSection';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Card from '../Cards/Card';
import Essay from '../Essay/Essay';
import cardData1 from '../../apiData/cardData'
import cardData2 from '../../apiData/cardData1';
import cardData3 from '../../apiData/cardData3';
import cardData4 from '../../apiData/cardData4';
import cardData5 from '../../apiData/CardData5';
import cardData6 from '../../apiData/cardData6';
import imageOne from '../../apiData/imageOne'
import imageTen from '../../apiData/imageTen'
import imageTwo from '../../apiData/imageTwo'
import imageThree from '../../apiData/imageThree'
import imageFour from '../../apiData/imageFour'
import imageFive from '../../apiData/imageFive'
import imageSix from '../../apiData/imageSix'
import imageSeven from '../../apiData/imageSeven'
import imageEight from '../../apiData/imageEight'
import imageNine from '../../apiData/imageNine'



function Home() { 
  return (
      <div className='home'>
      <div className=' container-xl '>
      <LinkSection />
      <Categories />
      <ProductSection data={imageOne} display='d-none' flash='d-none' time = 'd-none'  left='Appliances' Right="See all >" color='#fff'/>
      <ProductSection data={imageTwo}  display='d-none'flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fee2cc'/>
      <Card data={cardData6} title ='Health And Beauty'/>
      <ProductSection data={imageThree} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fff'/>
      <ProductSection data={imageTen}  left={ `Flash Sale`} bgcolor='red' color='text-white'  Right="See all >" />
      <Card data={cardData1} title = 'Appliances Upgrade'/>
      <ProductSection data={imageFour} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fee2cc'/>
      <BannerCarousel show2='d-none' show3='d-none'/>
      <ProductSection data={imageFive} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fee2cc'/>
      <Card data={cardData2} title ='Shop From Our Collections'/>
      <Card data={cardData3} title ='Phone Deals'/>
      <ProductSection data={imageSix} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fee2cc'/>
      <BannerCarousel show1='d-none' show3='d-none'/>
      <BannerCarousel show1='d-none' show2='d-none'/>
      <ProductSection data={imageSeven} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fee2cc'/>
      <Card data={cardData4} title ='Jumia Football Zones'/>
      <ProductSection data={imageEight} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fee2cc'/>
      <ProductSection data={imageNine} display='d-none' flash='d-none' time = 'd-none' left='Appliances' Right="See all >" color='#fee2cc'/>
      <Card data={cardData5} title ='Computing Deals'/>
      <Card data={cardData6} title ='Health And Beauty'/>
      <Essay />
      </div>
    </div>
  );
}


export default Home