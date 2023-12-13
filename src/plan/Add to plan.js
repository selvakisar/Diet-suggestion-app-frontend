import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import Topbar from "../components/topbar";
import { addToPlan } from "./foodplan routes";
import Footer from "../foods/planchart";

export const AddToPlan = () => {
  const { foodId } = useParams();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleAddtoPlan = async (e) => {
    e.preventDefault();
    console.log("AddtoPlan:", foodId);
    const response = await addToPlan(foodId);
    console.log(response);

    if (response.success) {
      setSuccessMessage(response.message);
      setErrorMessage("");

      setTimeout(() => {
        navigate("/user/my-plan");
      }, 3000);
    } else {
      setSuccessMessage("");
      setErrorMessage(response.message);
      console.log(response)
    }
  };

  console.log("AddtoPlan:",foodId);
  console.log(foodId);

  return (
    <div>
      <Topbar />

      <div className="flex justify-center items-center bg-red-300 m-1">
           
    
        
      <div>
      <button onClick={handleAddtoPlan} className="btn btn-outline bg-neutral btn-info w-full" >
            Add to plan
          </button>
      {successMessage && <p className="success-msg">{successMessage}</p>}
        {errorMessage && <p className="err-msg">{errorMessage}</p>}
      </div>

      </div>
      <Footer/>
    </div>
  );
};
