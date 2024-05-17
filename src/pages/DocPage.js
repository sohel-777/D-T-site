import React, { useState } from "react";
import ScheduleSession from "../components/ScheduleSession/ScheduleSession";
import Faq from "../components/Faq/Faq";

const DocPage = () => {
  
  return (
    <div className="flex flex-col items-center p-4 space-y-4">
       <div className="text-center">
        <h2 className="text-2xl font-bold">Get Expert Advice on Your Health and Skincare</h2>
        <p className="text-lg text-gray-700">Schedule a consultation or chat with our healthcare AI for personalized recommendations.</p>
      </div>
      <div className="bg-teal-500 m-2 rounded-lg flex flex-col items-center justify-center gap-4 p-6 shadow-md w-full">
        <p className="text-xl font-bold text-white text-center">
          Arrange a consultation with an expert
        </p>
        <ScheduleSession />
      </div>
      <div className="bg-green-500 m-2 rounded-lg flex flex-col items-center justify-center gap-4 p-6 shadow-md w-full">
        <p className="text-lg font-bold text-white text-center">
          Or chat with our healthcare/skincare AI chatbot
        </p>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition duration-300"
          
        >
          New Chat
        </button>
      </div>

     
        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md">
          <Faq />
        </div>
     
    </div>
  );
};

export default DocPage;
