import { useNavigate } from "react-router";

export default function Comp3(){
    const navigate = useNavigate();
    return(
        <div>
           <div className="card w-96 bg-base-300 bg-transparent shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://images.unsplash.com/photo-1521986329282-0436c1f1e212?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-fuchsia-100">
    <h2 className="card-title">Plan!</h2>
    <p>Make your Plan</p>
    <div className="card-actions">
      <button  onClick= {()=>navigate("/plan-view")} className="btn btn-primary">view Plan</button>
    </div>
  </div>
</div>
        </div>
    )
}