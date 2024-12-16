import React from 'react';
import TitleandSubtitle from '../../Sheard/TitleandSubtitle';
import slide from '../../assets/assets/home/slide1.jpg'
import { AwesomeButton } from "react-awesome-button";


const ChefRecommend = () => {
    return (
        <div className='mt-20'>
            <TitleandSubtitle
            title='Should Try'
            subTitle="CHEF RECOMMENDS"
            ></TitleandSubtitle>


<div className='flex'>
<div class="card bg-base-100 w-96 shadow-xl ">
  <figure class="px-10 pt-10">
    <img
      src={slide}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Caeser Salad</h2>
    <p className='m-auto'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div class="card-actions">
    <AwesomeButton type="secondary">Secondary</AwesomeButton>
    </div>
  </div>
</div>
<div class="card bg-base-100 w-96 shadow-xl ">
  <figure class="px-10 pt-10">
    <img
      src={slide}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Caeser Salad</h2>
    <p className='m-auto'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div class="card-actions">
    <AwesomeButton type="secondary">Secondary</AwesomeButton>
    </div>
  </div>
</div>
<div class="card bg-base-100 w-96 shadow-xl ">
  <figure class="px-10 pt-10">
    <img
      src={slide}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">Caeser Salad</h2>
    <p className='m-auto'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
    <div class="card-actions">
    <AwesomeButton type="secondary">Secondary</AwesomeButton>
    </div>
  </div>
</div>
</div>
            
        </div>
    );
};

export default ChefRecommend;