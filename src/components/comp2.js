import { useNavigate } from "react-router";

export default function Comp2(){
    const navigate = useNavigate();
    return(
        <div>
            <div className="card w-96 bg-base-300 bg-transparent shadow-xl">
  <figure className="px-10 pt-10">
    <img src="https://img.freepik.com/free-vector/body-mass-index-weight-control-with-bmi-healthy-unhealthy-lifestyle-flat-vector-illustration-fitness-indicator-before-after-diet-overall-health-body-fat-scale-concept_88138-795.jpg?w=1060&t=st=1700943577~exp=1700944177~hmac=e02a3a5df1476c7aef68bfb9b3635bfa6a784ebbf1518a885dcae40ca3f4ac49" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">BMI!</h2>
    <p>Check your Bmi</p>
    <div className="card-actions">
      <button  onClick= {()=>navigate("/bmi")} className="btn btn-primary">Calculate BMI</button>
    </div>
  </div>
</div>
        </div>
    )
}