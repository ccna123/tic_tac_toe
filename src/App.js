import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { ScorePannel } from "./components/ScorePannel";

function App() {
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [turn, setTurn] = useState(1);
  const [symbol, setSymbol] = useState("");
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);

  useEffect(() => {
    if (turn === 1) {
      setSymbol("X");
    } else {
      setSymbol("O");
    }
  }, [turn]);

  const handleChoice = (rowIndex, colIndex) => {
    if (board[rowIndex][colIndex] !== "") {
      return;
    }
    const newBoard = [...board];
    newBoard[rowIndex][colIndex] = symbol;
    setBoard(newBoard);

    setTurn(turn === 1 ? 2 : 1);
    checkWin();
  };

  const checkWin = () => {
    if (checkRow()) {
      if (turn === 1) {
        setScore1((prev) => prev + 1);
      } else {
        setScore2((prev) => prev + 1);
      }
    } else if (checkCol()) {
      console.log("col match");
    } else if (checkDiagonal()) {
      console.log("dia match");
    }
  };

  function checkRow() {
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] !== "" &&
        board[i][0] === board[i][1] &&
        board[i][1] === board[i][2]
      ) {
        return true;
      }
    }
    return false;
  }
  function checkCol() {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] !== "" &&
        board[0][i] === board[1][i] &&
        board[1][i] === board[2][i]
      ) {
        return true;
      }
    }
    return false;
  }
  function checkDiagonal() {
    if (
      (board[0][0] !== "" &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]) ||
      (board[0][2] !== "" &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0])
    ) {
      return true;
    }
    return false;
  }

  return (
    <div className="App bg-gradient-to-r from-cyan-400 to-blue-300 min-h-screen flex flex-col justify-center items-center">
      <div className="my-5">
        <ScorePannel turn={turn} scorePlayer1={score1} scorePlayer2={score2} />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {board.map((row, rowIndex) =>
          row.map((col, colIndex) => (
            <Card
              key={`${rowIndex}${colIndex}`}
              id={`${rowIndex}${colIndex}`}
              handleChoice={() => handleChoice(rowIndex, colIndex)}
              symbol={board[rowIndex][colIndex]}
              disabled={board[rowIndex][colIndex] !== ""}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
