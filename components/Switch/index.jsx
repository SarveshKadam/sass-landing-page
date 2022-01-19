import React, { useState } from "react";

function index({onStateChange, currentState}) {
  const toggleClass = " transform translate-x-5";
  return (
    <div
      className="md:w-14 md:h-7 w-12 h-6 flex items-center ml-10 bg-blue-300 rounded-full p-1 cursor-pointer duration-300 ease-in-out"
      onClick={onStateChange}
    >
      {/* Switch */}
      <div
        className={
          "bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform" +
          (!currentState ? null : toggleClass)
        }
      ></div>
    </div>
  );
}

export default index;
