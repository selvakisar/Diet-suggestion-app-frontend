// CalorieChart.js

import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title,CategoryScale } from 'chart.js';

Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

Chart.register(CategoryScale);

const CalorieChart = () => {
  const [caloriesData, setCaloriesData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Calories Consumed',
        data: [],
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  });

  const [formData, setFormData] = useState({
    date: '',
    calories: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add the new data to the chart
    setCaloriesData({
      labels: [...caloriesData.labels, formData.date],
      datasets: [
        {
          label: 'Calories Consumed',
          data: [...caloriesData.datasets[0].data, formData.calories],
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    });

    // Clear the form
    setFormData({
      date: '',
      calories: '',
    });
  };

  return (
    <div>
      <h2>Calorie Chart</h2>

      <form onSubmit={handleFormSubmit}>
        <label>
          Date:
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Calories:
          <input
            type="number"
            name="calories"
            value={formData.calories}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add Entry</button>
      </form>

      <Line data={caloriesData} />
    </div>
  );
};

export default CalorieChart;
