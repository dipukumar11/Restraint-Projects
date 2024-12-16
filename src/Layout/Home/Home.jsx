import React from 'react';
import Banar from '../../Banar/Banar';
import Feuterd from './Feuterd';
import ChefService from '../../Pages/ChefService';
import ManuSection from '../../Component/Manu section/ManuSection';
import ChefRecommend from '../../Component/CHEF RECOMMENDS/ChefRecommend';
import OurManu from '../../Component/OurManu/OurManu';

import Testimonial from '../../Component/Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <h1>

                <Banar></Banar>
                <Feuterd></Feuterd>
                <ChefService></ChefService>
                <ManuSection></ManuSection>
                <ChefRecommend></ChefRecommend>
                <OurManu></OurManu>
                <Testimonial></Testimonial>
                
                
            </h1>
            
        </div>
    );
};

export default Home;