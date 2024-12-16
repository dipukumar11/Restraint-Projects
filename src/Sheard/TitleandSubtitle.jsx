import React from 'react';

const TitleandSubtitle = ({title, subTitle}) => {
    return (
        <div className='w-64 m-auto text-center my-8'>

            <h1 className='font-bold mb-3 text-yellow-300'>---{title}---</h1>
            <h2 className=' border border-y-4 py-5 text-2xl font-bold uppercase'>{subTitle}</h2>

            
        </div>
    );
};

export default TitleandSubtitle;