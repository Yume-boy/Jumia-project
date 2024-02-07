import './Home.css'
import LinkSection from '../LinkSection/LinkSection';
import Categories from '../Categories/Categories';
import ProductSection from '../ProductSection/ProductSection';
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Essay from '../Essay/Essay';

function Home() { 
  return (
    <div>
      <LinkSection />
      <Categories />
      <ProductSection />
      <BannerCarousel />
      <Essay />
    </div>
  );
}


export default Home