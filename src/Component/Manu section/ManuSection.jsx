
import { useEffect, useState } from 'react';
import TitleandSubtitle from '../../Sheard/TitleandSubtitle';
import PopularManu from './PopularManu';
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';

const ManuSection = () => {
    const [Manu, SetManu] = useState([])
   useEffect(()=>{
    fetch('/public/Manu.json')
    .then(res=>res.json())
    .then(data=>{const manuItem = data.filter(items=>items.category === 'popular'); SetManu(manuItem)})
   },[])
   
    return (
        <div>
            <TitleandSubtitle
            title="Check It Out"
            subTitle="from Our Manu"
            ></TitleandSubtitle>

<div className='grid md:grid-cols-2 gap-7'>
{
    Manu.map(items =><PopularManu 
        key={items._id}
        items={items}
    
    ></PopularManu>)
}

</div>

<div className='m-auto text-center'>
<AwesomeButton  type="secondary">View Full Manu</AwesomeButton>
</div>








        </div>
    );
};

export default ManuSection;