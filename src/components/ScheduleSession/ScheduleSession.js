import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ScheduleSession = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleButtonClick = () => {
    setShowCalendar(true);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="flex flex-col items-center">
      {!showCalendar ? (
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
        >
          Schedule a Session
        </button>
      ) : (
        <div className="flex flex-col items-center">
          <DatePicker
            isClearable
            placeholderText="Select date & time"
            selected={selectedDate}
            onChange={handleDateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="Time"
            dateFormat="MMMM d, yyyy h:mm aa"
            minDate={new Date()}
            className="w-full p-2 border border-gray-300 rounded-lg shadow-md"
          />
          {selectedDate && (
            <div className="mt-4 flex flex-col items-center">
              <p className="text-gray-800 font-medium">
                Selected Date and Time: {selectedDate.toString()}
              </p>
              <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition duration-300">
                Confirm
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ScheduleSession;
