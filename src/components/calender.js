import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import the default styles

export const Datepic = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h2>Date</h2>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="dd/MM/yyyy" // Customize the date format if needed
        isClearable
        placeholderText="Select a date"
      />
      {selectedDate && (
        <p>You selected: {selectedDate.toLocaleDateString()}</p>
      )}
    </div>
  );
};

export const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="date-input-container">
      <label>Date:</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="MMMM d, yyyy" // Customize the date format if needed
        isClearable
        placeholderText="Select a date"
      />
    </div>
  );
};

