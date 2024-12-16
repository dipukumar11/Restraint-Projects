import React, { useEffect, useState } from 'react';
import TitleandSubtitle from '../../Sheard/TitleandSubtitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { DiCodeigniter } from "react-icons/di";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
   const [revew, setRevew]= useState([])
   useEffect(()=>{
    fetch('/public/Review.json')
    .then(res=>res.json())
    .then(data => setRevew(data))
   },[])


    return (
        <div>
            <TitleandSubtitle 
            title="What Our Clients Say-"
            subTitle="TESTIMONIALS"
            >

            </TitleandSubtitle>

            
            <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        
          {
            revew.map(revews =><SwiperSlide>
                
            <div className='text-center m-auto'>
       <div className='m-auto block text-center w-28'>
       <Rating
      style={{ maxWidth: 180 }}
      value={revews.rating}
      readOnly
    /> 
              <DiCodeigniter  className=' text-7xl'/>
       </div>
              <p className='w-[80%] m-auto'>{revews.details}</p>
              <h1 className='text-2xl font-bold text-yellow-400'>{revews.name}</h1>
  
              
            </div>


            </SwiperSlide>)
          }
      </Swiper>
            </div>
            
        </div>
    );
};

export default Testimonial;