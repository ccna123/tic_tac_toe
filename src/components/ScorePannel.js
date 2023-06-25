import React from "react";

export const ScorePannel = ({ turn, scorePlayer1, scorePlayer2 }) => {
  return (
    <div className="cursor-pointer bg-white rounded-lg p-4 flex justify-around">
      <div
        className={`${turn === 1 && "border-red-600 border-b-4"}  rounded-md`}
      >
        Player 1
        <p className="text-center">{scorePlayer1}</p>
      </div>
      <span className="border border-gray-400 mx-4"></span>
      <div
        className={`${turn === 2 && "border-blue-600 border-b-4"}  rounded-md`}
      >
        Player 2
        <p className="text-center">{scorePlayer2}</p>
      </div>
    </div>
  );
};
