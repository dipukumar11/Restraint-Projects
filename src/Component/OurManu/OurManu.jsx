import React from 'react';
import TitleandSubtitle from '../../Sheard/TitleandSubtitle';
import feuterd from '../../assets/assets/home/featured.jpg'

const OurManu = () => {
    return (
        <div className='bg-fixed bg-cover bg-no-repeat bg-[url("/src/assets/assets/home/featured.jpg")]'>
            
          <div>
          <TitleandSubtitle className=""
               title='Check it out'
               subTitle="FROM OUR MENU"
            ></TitleandSubtitle>


            <div className='md:flex gap-7 text-white w-4/6 m-auto p-10'>
                <img className='w-[200px]' src={feuterd} alt="" />
                <div>
                    <h1>March 20, 2023 <br />
                    WHERE CAN I GET SOME?</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel aliquid repellendus, alias ratione distinctio possimus atque exercitationem. Assumenda, nesciunt! Aliquid id, dolores cumque dicta deserunt placeat officiis vel optio impedit!</p>
                </div>
            </div>
          </div>


            
        </div>
    );
};

export default OurManu;