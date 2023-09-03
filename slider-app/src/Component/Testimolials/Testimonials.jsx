import React from 'react'
import Testimonialse from '../../assets/ecommarce/testimonialHero.png'
import Profile1 from '../../assets/ecommarce/profile1.png'
import './../Testimolials/testimonials.css';
import { TestimonialsData } from '../../data/testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

// Import Swiper styles
import "swiper/css";

// import "./styles.css";
function Testimonials() {
  return (
    <div>
      <div className="testimonials_section container d-flex">

{/* left side */}
<div className="t_leftside col-md-4">
   <div className="testimolias_bottom">
   <span className="r_header">
   TOP RATED
    </span>
    <p className="text_t">
    SEEDILY SAY HAS SUITABLE DISPOSAL AND BOY.  EXERCISE <br/> JOY MAN CHILDREN REJOICED.
    </p>
   </div>
</div>



{/* Middle_side */}


<div className="t_side col-md-4">
 <div className="t_middlebottom">
 <img src={Testimonialse} alt="" />
 <h1 className='test_header'>Review</h1>
 </div>
 
</div>


{/* right_side */}


<div className="right_side_testimonials col-md-4">
   <span className="r_header">
      100K
    </span>
   <div className="t_bottom">
   <span className="t_header">
   HAPPY CUSTOMERS WITH US
    </span>
</div>
</div>
</div>
     {/* slider */}

    
  <div className="testimonials_slider ">

        <Swiper
          slidesPerGroup={1}
          slidesPerView={2}
          spaceBetween={30}
          navigation={false}
          autoplay={true}
          modules={[Pagination, Navigation]}
          className="mySwipers mt-5">
            
            { TestimonialsData.map((testimolials,i)=>(
               <SwiperSlide key={i}>
                <div className="card_test">
               <img src={testimolials.image} alt="" />
               <p className="testimonials_details  ">{testimolials.comment}</p>
               <hr  />
               <h2 className="T_name ">{testimolials.name}</h2>
             </div>
               </SwiperSlide>
            ))  }

        </Swiper>



      
  </div>
      

    </div>
  )
}

export default Testimonials
