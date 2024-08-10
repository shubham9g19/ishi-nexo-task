import React from "react";

const Loader = ({ message = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center space-x-2">
        <div className="w-4 h-4 rounded-full animate-spin border-2 border-t-2 border-t-blue-500 border-blue-300"></div>
        <div className="w-4 h-4 rounded-full animate-spin border-2 border-t-2 border-t-blue-500 border-blue-300"></div>
        <div className="w-4 h-4 rounded-full animate-spin border-2 border-t-2 border-t-blue-500 border-blue-300"></div>
      </div>
      <p className="mt-4 text-lg text-gray-700">{message}</p>
    </div>
  );
};

export default Loader;
