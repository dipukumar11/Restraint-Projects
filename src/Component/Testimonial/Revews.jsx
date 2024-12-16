import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Revews = ({revews}) => {
    const {name, details, rating} = revews;

    return (
        <div>

<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>Hello</SwiperSlide>
        
      </Swiper>


            
        </div>
    );
};

export default Revews;