import { useNavigate } from "react-router"
import Topbar from "./topbar";

export default function Comp1(){
  <Topbar/>
    const navigate = useNavigate();
    return(
        <div>
            <div className="card w-96 bg-base-300 bg-transparent shadow-xl">
  <figure className="px-10 pt-10 ">
    <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8fDA%3D" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-fuchsia-100">
    <h2 className="card-title">Foods</h2>
    <p>Eat good and stay Healthy</p>
    <div className="card-actions"> 
      <button  onClick= {()=>navigate("/all")} className="btn btn-primary">view All Foods</button>
    </div>
  </div>
</div>
        </div>
    )
}