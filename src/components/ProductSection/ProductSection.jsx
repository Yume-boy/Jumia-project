import './ProductSection.css'


import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";



const ProductSection = (props) => {

  const [cardData, setCardData] = useState(props.data)
    const size = useWindowSize()
  const render2 = cardData.map((card,idx) => {
      return (
          <SwiperSlide key={idx} className='content'>
               
          <div className='content tol'>
              <div><img src={card.imageUrl} /></div>
              <div className='products'>
              <div style={{width:'100%'}}><p className='p1'>{card.name}</p></div>
              <p className='p2'>{card.newPrice}</p>
              <p className='p3'>{card.oldPrice}</p>
              </div>
              
              
              </div>    
          </SwiperSlide>
      )
  })
  return (
    <div className="">
      <div className="">
      
        <div className=" cover">
        <div className='card-text'>
                <h4>content</h4>
            </div>
          <Swiper
        slidesPerView={size.width < 768 ? 3 : 6}
        spaceBetween={10}
       
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay, Mousewheel]}
        className="mySwiper"
      >
        {render2}
      </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProductSection