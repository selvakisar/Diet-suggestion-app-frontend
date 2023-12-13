import Footer from "../foods/planchart";
import { BmiCalculator } from "./BMI";
import BMIChart from "./bmi chart";
import Topbar from "./topbar";

export default function Bmidata(params) {
    return(
        <div   style={{backgroundImage:  `url("https://media.istockphoto.com/id/876656394/photo/healthy-food-concept-fresh-vegetables-fruits-meat-and-fish-on-wooden-table-healthy-eating-and.jpg?s=2048x2048&w=is&k=20&c=brr9M16eAH7Ji-Bglq2RF5vXQciZDFL5yebUScZ8ahY=")`}}>
           <div>
           <Topbar/>
             <div  className='grid grid-cols-2 gap-4 bg-cyan-400 '>
                <BMIChart/>
            
            <BmiCalculator/>
            </div>
<div className=" my-36">
<Footer/>
    </div>   </div>     </div>
    )
};
