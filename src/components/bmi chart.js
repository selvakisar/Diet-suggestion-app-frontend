import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

Chart.register(CategoryScale);
const BMIChart = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiData, setBmiData] = useState([]);

  const calculateBMI = () => {
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
        data: bmiData.map((data) => data.bmi),
      },
    ],
  };

  return (
    <div className="artboard artboard-horizontal phone-2">
      <h2>BMI Chart</h2>
      <div className=' bg-transparent'>
        <label className="">Height (cm):</label>
        <input className="input input-bordered input-accent w-full max-w-xs"  type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (kg):</label>
        <input className="input input-bordered input-accent w-full max-w-xs"  type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button className="btn btn-outline btn-accent" onClick={calculateBMI}>Calculate BMI</button>
      <Line data={chartData} />
    </div>
  );
};

export default BMIChart;