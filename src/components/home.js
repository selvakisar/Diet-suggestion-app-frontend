import React from 'react';

import Topbar from './topbar';
import Comp1 from './comp1';
import Comp2 from './comp2';
import Comp3 from './comp3';
import FoodCard from '../foods/foodcard';


export default function Home() {
  

    return(

<div  style={{ 
            backgroundImage: `url("https://media.istockphoto.com/id/876656394/photo/healthy-food-concept-fresh-vegetables-fruits-meat-and-fish-on-wooden-table-healthy-eating-and.jpg?s=2048x2048&w=is&k=20&c=brr9M16eAH7Ji-Bglq2RF5vXQciZDFL5yebUScZ8ahY=")` 
          ,flexFlow:"row" , flexDirection:"row"}}>
<Topbar/>      
             
  <div className="grid grid-cols-3 gap-4 flex-row w-full h-full card  bg-transparent rounded-box place-items-center">

<Comp1/>

<Comp2/>

<Comp3/>

<FoodCard/>

   
    </div> 
 
  {/* <div className="grid flex h-full card bg-base-300 bg-transparent rounded-box place-items-center"></div>
 
  <div className="grid flex h-full card bg-base-300 bg-transparent rounded-box place-items-center"></div> */}


   

</div>       
    )
    
};