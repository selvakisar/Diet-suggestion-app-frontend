import React from 'react';

import Topbar from './topbar';
import Comp1 from './comp1';
import Comp2 from './comp2';
import Comp3 from './comp3';
// eslint-disable-next-line no-unused-vars


export default function Home() {
  

    return(
<div className="hero min-h-screen" style={{backgroundImage:  `url("https://media.istockphoto.com/id/876656394/photo/healthy-food-concept-fresh-vegetables-fruits-meat-and-fish-on-wooden-table-healthy-eating-and.jpg?s=2048x2048&w=is&k=20&c=brr9M16eAH7Ji-Bglq2RF5vXQciZDFL5yebUScZ8ahY=")`}}>
  <div className="hero-overlay "> <Topbar/>   </div>
  <div className="hero-content text-center text-neutral-content">
 
  <div className="grid grid-cols-3 gap-4 flex-row w-full h-full card  bg-transparent rounded-box place-items-center">

<Comp1/>

<Comp2/>

<Comp3/>



   
    </div> 
  
 

  </div>
  
</div>


)
    
};


 