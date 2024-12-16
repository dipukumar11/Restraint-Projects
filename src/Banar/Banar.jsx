
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../assets/assets/home/01.jpg'
import slide2 from '../assets/assets/home/02.jpg'
import slide3 from '../assets/assets/home/03.png'
import slide4 from '../assets/assets/home/04.jpg'
import slide5 from '../assets/assets/home/05.png'
import slide6 from '../assets/assets/home/06.png'

const Banar = () => {
    return (
        <div className='text-center'>

<Carousel>
                <div>
                    <img src={slide1} />
                   
                </div>
                <div>
                    <img src={slide2} />
                   
                </div>
                <div>
                    <img src={slide3} />
                   
                </div>
                <div>
                    <img src={slide4} />
                   
                </div>
                <div>
                    <img src={slide5} />
                   
                </div>
                <div>
                    <img src={slide6} />
                   
                </div>
            </Carousel>

            
        </div>
    );
};

export default Banar;