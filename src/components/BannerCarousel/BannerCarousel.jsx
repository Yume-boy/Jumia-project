import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, Mousewheel } from 'swiper/modules';
import './BannerCarousel.css'

const BannerCarousel = (props) => {

  const [show1, setShow1] = useState('d-block')
  const [show2, setShow2] = useState('d-block')



  return (
    <div className={` banner-carousel`}>
      <div className={` ${props.show1}`}>
        <div className={`row bg-white mt-4 g-2 px-2`}>
            <h4 className='d-flex justify-content-center mt-3'>Explore More</h4>
            <div className='col-6 py-3'>
              <img src="https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/572X250_copy_4.png" alt="" />
            </div>
            <div className='col-6 py-3'>
              <img src="https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/572X250_copy_6.png" alt="" />
            </div>
          </div>
            <div className={`row bg-white mt-4 g-2 px-2`}>
            <div className='col-6 py-3'>
              <img src="https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/572X250_copy_7.png" alt="" />
            </div>
            <div className='col-6 py-3'>
              <img src="https://ng.jumia.is/cms/0-1-category-pages/0-cat-dev/2024/Feb/572X250_copy_17.png" alt="" />
            </div>
          </div>
      </div>


        <div className={`my-3 ${props.show2}`}>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper d-none d-lg-block"
        id='banner'
      >
        <SwiperSlide><img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/cocacola/Desktop_MLP_Slider__1168x384.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/adidas/Desktop_MLP_Slider__1168x384.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/xiaomi/Desktop_MLP_Slider__1168x384.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/oraimo/Desktop_MLP_Slider__1168x384.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/infinix/INFINIX_Desktop_MLP_Slider__1168x384.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://ng.jumia.is/cms/0-1-initiatives/jbps/2024/CHI_LIMITED/CHI_Desktop_MLP_Slider__1168x384.jpg" alt="" /></SwiperSlide>
      </Swiper>
        </div>


        <div className={`${props.show3}`}>
          <div className={`bg-white d-none d-lg-block`}>
          <h4>Official Stores</h4>
            <div className={` mt-4 g-2 px-2`}>
              <div className={`row col-lg py-3 `} >
                <img src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/xiaomi_260x144.png" alt="" />

                <img  src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/nivea_260x144.png" alt="" />

                <img  src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/diageo_260x144.png" alt="" />

                <img  src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/oraimo_260x144.png" alt="" />

                <img  src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/adidas_260x144_V2.png" alt="" />

                <img  src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/reckitt_260x144.png" alt="" />
              </div>
            </div>
          
            <div className={``}>
              <div className={`row col-lg py-3 `}>
                <img style={{height:'110px', width:'185px', marginLeft:'5px'}} src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/binatone_260x144.png" alt="" />

                <img   src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/haier-thermocool_260x144.png" alt="" />

                <img   src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/Brand-design-update/Pernod_ricard.png" alt="" />

                <img   src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/infinix_260x144v2.png" alt="" />

                <img   src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/tecno_260x144.png" alt="" />

                <img   src="https://ng.jumia.is/cms/0-1-homepage/freelinks-brands-all/bacardi-bacardi_260x144.png" alt="" />
                
              </div>
            </div>

            
          </div>
          <div className='d-lg-none'>

          </div>
        </div>
    </div>
  )
}

export default BannerCarousel