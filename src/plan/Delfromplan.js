import { useState } from "react";
import { deletePlanItem } from "./foodplan routes";
import Topbar from "../components/topbar";


export const DeleteFromPlan = ({ itemId }) => {
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleDeleteFromPlan = async () => {
        const response = await deletePlanItem(itemId);

        if (response.success) {
            setSuccessMessage(response.message);
            setErrorMessage("");
        } else {
            setSuccessMessage("");
            setErrorMessage(response.message);
        }
    };

    return (

        <div>
        <Topbar/>
            <button onClick={handleDeleteFromPlan}>Remove from Plan</button>
            {successMessage && <p className="success-msg">{successMessage}</p>}
            {errorMessage && <p className="err-msg">{errorMessage}</p>}
        </div>
    );
};