/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { deletePlanItem, myPlan } from "./foodplan routes";
import Topbar from "../components/topbar";

export function MyPlan() {
  const [foodData, setFoodData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchUserPlan = async () => {
    setIsLoading(true);

    const response = await myPlan();

    if (response.success) {
      setFoodData(response.foodPlan);
    } else {
      console.error(response.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchUserPlan();
  }, []);

  const handleDeleteFromPlan = async (itemId) => {
    const response = await deletePlanItem(itemId);

    if (response.success) {
      fetchUserPlan();
    } else {
      console.error(response.message);
    }
  };



  if (isLoading) {
    return <div>Loading...
        <span className="loading loading-spinner text-error">Loading...</span>
    </div>;
  }

  return (
    <div>
      <Topbar />

      <div className="bg-neutral min-h-screen flex items-center justify-center m-1">
                {foodData && foodData.items.length > 0 ? (
                    <div className='bg-neutral m-1' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {foodData.items.map(item => (
                            <div key={item._id} >
                                <div className="card bg-neutral border-2 border-info dark shadow-xl w-80 m-2">
                                    <figure className="h-1/3">
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{item.Foods.Food}</h2>
                                        <p>{item.Foods.Calories}</p>
                                        <div className="card-actions">
                                            {/* <button className="btn btn-primary" onClick={() => handlePlaceOrder(item._id)}>
                                                Buy Now
                                            </button> */}
                                            <button className="btn btn-secondary" onClick={() => handleDeleteFromPlan(item._id)}>Delete</button>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='accent'>No items in the Plan  </div>
                )}
           
            </div>














    </div>
  );
}
