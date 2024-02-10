import React from 'react'
import './Categories.css'
import { useState } from 'react'
import firstCardData from '../../apiData/firstCardData'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Mousewheel, FreeMode, Scrollbar } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";



const Categories = () => {
  const [cardData, setCardData] = useState(firstCardData)
  const size = useWindowSize()
  const render2 = cardData.map((card,idx) => {
      return (
        <div key={idx} className=''>
            <SwiperSlide>
               
          <div class='no'>
              <div id='yes'><img src={card.imagesrc} /></div>
          <p>{card.productName}</p>
              
              
              </div>    
          </SwiperSlide>
          </div>
      )
  })


  return (
    <div className="">
      <div className='appliances my-3  text-center'>
      
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        mousewheel={true}
        freeMode={true}
        scrollbar={true}
         breakpoints={{
          '@0.00': {
            slidesPerView: 5,
            spaceBetween: 6,
          },
          '@0.75': {
            slidesPerView: 5,
            spaceBetween: 6,
          },
          '@1.00': {
            slidesPerView: 8,
            spaceBetween: 6,
          },
          '@1.50': {
            slidesPerView: 8,
            spaceBetween: 6,
          },
        }}
        
        modules={[Pagination, Autoplay, Mousewheel, FreeMode, Scrollbar]}
        className="mySwiper"
      >
        {render2}
      </Swiper>
        </div>
    </div>
  )
}

export default Categories