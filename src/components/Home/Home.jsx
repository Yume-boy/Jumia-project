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
    <div className=' container'>
      <LinkSection />
      <Categories />
      <ProductSection data={imageOne}/>
      <ProductSection data={imageTwo}/>
      <Card data={cardData6} title ='Health And Beauty'/>
      <ProductSection data={imageThree}/>
      <Card data={cardData1} title = 'Appliances Upgrade'/>
      <ProductSection data={imageFour}/>
      <BannerCarousel show2='d-none'/>
      <ProductSection data={imageFive}/>
      <Card data={cardData2} title ='Shop From Our Collections'/>
      <Card data={cardData3} title ='Phone Deals'/>
      <ProductSection data={imageSix}/>
      <BannerCarousel show1='d-none'/>
      <ProductSection data={imageSeven}/>
      <Card data={cardData4} title ='Jumia Football Zones'/>
      <ProductSection data={imageEight}/>
      <ProductSection data={imageNine}/>
      <Card data={cardData5} title ='Computing Deals'/>
<<<<<<< HEAD
      <Card data={cardData6} title ='Health And Beauty'/>
=======
>>>>>>> 78a3f37a9354746e2d4a3e2ce4cc28bf9de0916e
      <Essay />
    </div>
  );
}


export default Home