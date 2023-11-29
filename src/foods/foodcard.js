import React from "react";
import { useNavigate } from "react-router";
export default function FoodCard(Food){

   
  // eslint-disable-next-line no-empty-pattern
const navigate=useNavigate()
  // const handleButtonClick = () => {
    // Toggle the state when the button is clicked
  //   setIsAdded(!isAdded);
  // }

//  console.log("foodcard:",Food)
    return(
 <div>
  <div className="card w-80 bg-green-500" key={Food.foodId}  >
    
    <h3 className=" text-2xl text-cyan-950 bg-yellow-500">{Food.Food}</h3>
    <div className=" text-zinc-100"><h4  className=" text-slate-950">Measure:</h4>{Food.Measure}</div>
    <div className=" text-zinc-100"><h4  className=" text-slate-950">Calories:</h4>{Food.Calories}</div>
    <div className=" text-zinc-100"><h4  className=" text-slate-950">Protein:</h4>{Food.Protein}</div>
    <div className=" text-zinc-100"><h4  className=" text-slate-950">Carbs:</h4>{Food.Carbs}</div>
    <div className=" text-zinc-100"><h4  className=" text-slate-950">Category:</h4>{Food.Category}</div>
<button className="btn btn-accent" onClick={()=>{navigate(`/plan/add/${Food.foodId}`)}}> Add to plan</button>

  </div>
 </div>
    )
}

//  const button= ({ isAdded, onClick }) => {
  
//   return (
//     <button onClick={onClick}>
//       {isAdded ? 'Remove' : 'Add'}
//     </button>
//   );

//   }


