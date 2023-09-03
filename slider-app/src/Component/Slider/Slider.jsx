// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ProductsData } from './../../data/products';
import { Navigation, Pagination } from 'swiper';
import './../Slider/slider.css'
function Slider() {
  return (
    <div className='main_container_s'>
      <Swiper 
       slidesPerGroup={1}
       slidesPerView={3}
       spaceBetween={30}
       navigation={true}
       loop={true}
       modules={[Pagination, Navigation]}
       className="mySwiper container">
        
        {ProductsData.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="product_slider">
              <div className="content_slider">
                <h1 className='product_name'>{slide.name}</h1>
                <span className='pro_detail'>{slide.detail}</span>
                <button className='btn btn-outline-info'>Order</button>
              </div>
              <img src={slide.img} alt="products" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
