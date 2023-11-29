import React from 'react';
import { useNavigate } from 'react-router';



// export default function TopBar() {
//     const navigate=useNavigate();
//   return (
  

//   )
// }


export default function Topbar(){
  const navigate=useNavigate();
  return(
    <div className="navbar  bg-rose-700 justify-center">

  <div className="  grid grid-cols-4 gap-x-3.5 ">
    <a href='/home' className="btn btn-black normal-case text-xl" 
    onClick={()=>navigate("/home")}>Home</a>

    <button  className="btn btn-black normal-case text-xl text-center "
     onClick={()=>navigate("/bmi")}>BMI</button>

    <button  className="btn btn-black normal-case text-xl text-center "
    
    onClick={()=>navigate("/plan-view")}>PLAN</button>

<button  className="btn btn-black normal-case text-xl text-center "
    
    onClick={()=>navigate("/user/my-plan")}>My plan</button>

  </div>













</div>
  )
}

