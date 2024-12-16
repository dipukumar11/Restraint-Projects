import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../assets/assets/home/slide1.jpg'
import slide2 from '../../assets/assets/home/slide2.jpg'
import slide3 from '../../assets/assets/home/slide3.jpg'
import slide4 from '../../assets/assets/home/slide4.jpg'
import slide5 from '../../assets/assets/home/slide5.jpg'
import TitleandSubtitle from '../../Sheard/TitleandSubtitle';

const Feuterd = () => {
    return (
        <div className='my-10'>

    <TitleandSubtitle 
    title="From 11:00am to 10:00pm"
    subTitle="order online"
    
    ></TitleandSubtitle>


<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" />
        <h1 className='uppercase font-bold text-white text-2xl  -mt-10 text-center'> Salads</h1>
        
        </SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" />
        <h1 className='uppercase font-bold text-white text-2xl  -mt-10 text-center'> pizza</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" />
        <h1 className='uppercase font-bold text-white text-2xl  -mt-10 text-center'> Soups</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" />
        <h1 className='uppercase font-bold text-white text-2xl  -mt-10 text-center'> Desserts</h1>
        </SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" />
        <h1 className='uppercase font-bold text-white text-2xl  -mt-10 text-center'> Salads</h1>
        </SwiperSlide>
        
      </Swiper>
            
        </div>
    );
};

export default Feuterd;