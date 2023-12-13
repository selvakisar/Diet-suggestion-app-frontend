

import React, {  useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';
import { bmiBaseUrl } from '../Api/api';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);
Chart.register(CategoryScale);


export default function BMIChart(){

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiData, setBmiData] = useState([]);

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
          setBmiData(bmiInfos.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      getBmiData();
}, [])


  const calculateBMI = async () => {
    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);

    const newBmiData = [
      ...bmiData,
      {
        date: new Date().toISOString().split('T')[0],
        bmi: parseFloat(bmi),
      },
    ];

    setBmiData(newBmiData);
    setHeight('');
    setWeight('');
    

    const payload = {
      "date": new Date().toISOString().split('T')[0],
      "bmiInfo": parseFloat(bmi),
      "userId": localStorage.getItem("userId")
  }
    try {
      const response = await fetch(`${bmiBaseUrl}/add`, {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
              "x-auth-token": localStorage.getItem("token"),
              "Content-Type": "application/json",
          },
      });
      const data = await response.json();
      if (response.ok) {
         window.location.reload();
          return {
              success: true,
              message: data.message,
          };
      } else {
          return {
              success: false,
              message: data.error,
          };
      }
  } catch (error) {
      return {
          success: false,
          message: "An error occurred while adding product to cart",
      };
  }

  };

  const chartData = {



    labels: bmiData.map((data) => data.date),
    datasets: [
      {
        label: 'BMI Chart',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: bmiData.map((data) => data.bmiInfo),
      },
    ],
  };
  

  return (
    <div className=" bg-transparent">
      <h2>BMI Chart</h2>
      <Line data={chartData} />

      <div className=' bg-transparent'>
        <label className="">Height (cm):</label>
        <input className="input input-bordered input-accent w-full max-w-xs"  type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input className="input input-bordered input-accent w-full max-w-xs"  type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button className="btn btn- btn-warning" onClick={calculateBMI}>Calculate BMI</button>
   
    </div>
  );
};

