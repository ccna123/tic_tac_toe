import React, { useState } from "react";

export const Card = ({ id, handleChoice, symbol, disabled }) => {

  const handleClick = () => {
    handleChoice(id);
  };

  return (
    <div className=" bg-white cursor-pointer hover:shadow-lg hover:scale-105 duration-150 w-[128px] h-[128px] flex items-center rounded-md">
      <p
        onClick={handleClick}
        className={`${disabled && 'bg-black bg-opacity-25 rounded-md cursor-not-allowed'} w-full h-full flex items-center justify-center text-8xl ${symbol === "X" ? "text-red-600" : "text-blue-600"
          } `}
      >
        {symbol}
      </p>
    </div>
  );
};
