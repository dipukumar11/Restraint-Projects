import React from 'react';


const PopularManu = ({items}) => {
 const   {name, price, image, recipe } = items;
    return (
       <div>
         <div className='flex gap-5'>
            <img style={{borderRadius:"0 200px 200px 200px" }} className='md:w-[70px] h-[60px]  ' src={image} alt="" />
            <div>
                <h1 className='font-bold text-xl'>{name}------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='font-bold text-yellow-400'>${price}</p>
          
            
        </div>
       
       </div>
    );
};

export default PopularManu;