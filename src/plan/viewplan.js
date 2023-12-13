/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { deletePlanItem, myPlan } from "./foodplan routes";
import Topbar from "../components/topbar";
import BMIChart from "../components/bmi chart";
import MyPlanChart from "../foods/planchart";
import Footer from "../foods/planchart";


export function MyPlan() {
  const [foodData, setFoodData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

 

  const fetchUserPlan = async () => {
    setIsLoading(true);

    const response = await myPlan();

    if (response.success) {
      setFoodData(response.data);
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
        <span className="loading loading-spinner text-accent">Loading...</span>
    </div>;
  }

  return (
    <div style={{backgroundImage:  `url("https://media.istockphoto.com/id/876656394/photo/healthy-food-concept-fresh-vegetables-fruits-meat-and-fish-on-wooden-table-healthy-eating-and.jpg?s=2048x2048&w=is&k=20&c=brr9M16eAH7Ji-Bglq2RF5vXQciZDFL5yebUScZ8ahY=")`}} >
      <Topbar />
      <div className="">

        <div>
        </div>
      
                {foodData && foodData.items.length > 0 ? (
                    <div className=' mx-5 ' style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {foodData.items.map(item => (
                            <div key={item._id} >
                            
                                  <div className="card w-96 h-52 bg-green-500 bg-opacity-75 mx-3 my-2" >
                                        <h2 className="card-title justify-center my-1">Food:{item.Food}</h2>
                                        {console.log(item.Protein)}
                                        <p>Calories:{item.Calories}</p>
                                        <p>Protein:{item.Protein}</p>
                                        <p>Category:{item.Category}</p>
                                        <div className="card-actions justify-center">
                                            <div>
                                            <button className="btn btn-secondary" 
                                            onClick={() => handleDeleteFromPlan(item._id)}>Delete</button>
                                       
                                            </div>
                                            </div>
                                        </div>
                            
                            </div>
                        ))}

                    </div>
                ) : (
                    <div className='accent'>No items in the Plan  </div>
                

                )}
            <Footer/>
            </div>














    </div>
  );
}





