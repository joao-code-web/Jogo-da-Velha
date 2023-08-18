import { useState } from "react";
import Square from "./components/Square";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);

  const handleClick = (i) => {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[i] = isX ? "X" : "O";
    setSquares(newSquares);
    setIsX(!isX);
  };

  const handleReset = () => {
    setIsX(true);
    setSquares(Array(9).fill(null));
  };

  const calculateWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${isX ? "X" : "O"}`;
  }

  return (
    <div className="board-wraper">
      <div className="board-row">
        {[0, 1, 2].map((i) => (
          <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {[3, 4, 5].map((i) => (
          <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="board-row">
        {[6, 7, 8].map((i) => (
          <Square key={i} value={squares[i]} onClick={() => handleClick(i)} />
        ))}
      </div>
      <div className="status">
        {status}
        <Button name="reset" text={"Resetar"} onClick={handleReset} />
      </div>
    </div>
  );
};

export default App;
