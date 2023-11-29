import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { addToPlan } from "./foodplan routes";
import Topbar from "../components/topbar";

export const AddToPlan = () => {
    const  {foodId}  = useParams();
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleAddtoPlan = async () => {
        console.log("AddtoPlan:",foodId)
        const response = await addToPlan(foodId);
        console.log(response)

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");
           
            setTimeout(() =>{
                navigate("/user/my-plan")
            }, 3000)

        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }


    };

   
   

    console.log(foodId)
        
    return (
        <div>
            <Topbar/>
        <div className="flex justify-center items-center h-screen bg-red-300 m-1">
    <div>
        <h2 className="text-center dark text-3xl">Add to Cart</h2>
        <form className="forms" >
            
            <button onSubmit={ ()=>handleAddtoPlan} className="btn btn-outline bg-neutral btn-info w-full" type="submit">
                Add to plan
            </button>

        </form>
        {successMessage && <p className="success-msg">{successMessage}</p>}
        {errorMessage && <p className="err-msg">{errorMessage}</p>}
    </div>
</div>
</div>
    );
};