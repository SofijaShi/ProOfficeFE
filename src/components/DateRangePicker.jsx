import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateRangePicker = ({startDate, setStartDate, endDate, setEndDate}) => {
  return (
    <div className="date-range-picker">
      <div className="date-container">
      <label htmlFor="start-date">Date From</label>
      <DatePicker
        id="start-date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select a start date"
      />
      </div>
      <div className="date-container">
      <label htmlFor="end-date">Date To</label>
      <DatePicker
        id="end-date"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select an end date"
        minDate={startDate}
      />
      </div>
    </div>
  );
}