import { useEffect, useState } from "react";

import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import { bmiBaseUrl } from "../Api/api";


Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

Chart.register(CategoryScale);



export  function BmiCalculator() {
    const [bmiInfo, setBmiInfo] = useState([]);

    useEffect(()=>{
        const getBmiData = async () => {
            const userId = localStorage.getItem("userId");
            try {
                const response = await fetch(`${bmiBaseUrl}/item/${userId}`, {
                    method: "GET",
                    headers: {
                        "x-auth-token": localStorage.getItem("token"),
                        "Content-Type": "application/json",
                    },
                });
              if (!response) {
                throw new Error("Couldn't fetch BMI data");
              }
              const bmiInfos = await response.json();
              setBmiInfo(bmiInfos.data);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
          getBmiData();
    }, [])

    const removeBMIdetail = async (_id) => {

            const response = await fetch (`${bmiBaseUrl}/del/${_id}`,{
                method: "DELETE",
                headers: {
                    "x-auth-token": localStorage.getItem("token"),
                    "Content-Type": "application/json",
                },
            });
            const data=await response.json();
            console.log(data);
            window.location.reload();
            const newBMIList=bmiInfo.filter((bmi,idx)=>bmi._id !== _id)
            setBmiInfo(newBMIList)

    }


    return (   
      <div>
<div>
  
  
          <div className="card lg:card-side  shadow-xl">
          <table className="table table-hover table-bordered text-white">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>BMI data</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bmiInfo.length > 0 && bmiInfo.map((bmi, i)=> {
                                return(
                                    <tr key={i}>
                                    <td>{bmi.date}</td>
                                    <td>{bmi.bmiInfo}</td>
                                    <td><button onClick={()=>removeBMIdetail(bmi._id)}>Remove</button></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
          </div>
                </div>
    </div>

  

     );
  }

