import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Board from './component/Board';
import checkWinner from './component/checkWinner';

function Game({ initialPlayer }) {
  const navigate = useNavigate();
  const size = 15;
  const [currentBoard, setCurrentBoard] = useState(
    Array(size)
      .fill(null)
      .map(() => Array(size).fill(null))
  );
  const [history, setHistory] = useState([]); // 追蹤歷史紀錄
  const [currentPlayer, setCurrentPlayer] = useState(initialPlayer);
  const [winner, setWinner] = useState(null);

  const onFieldClick = (x, y) => {
    if (winner || currentBoard[y][x] !== null) {
      return;
    }

    const newBoard = currentBoard.map(row => [...row]);
    newBoard[y][x] = currentPlayer;

    setHistory([...history, currentBoard]);
    setCurrentBoard(newBoard);

    if (checkWinner(newBoard, x, y, currentPlayer)) {
      setWinner(currentPlayer);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const undoLastMove = () => {
    if (history.length === 0) {
      return;
    }

    const previousBoard = history[history.length - 1];
    setHistory(history.slice(0, history.length - 1));
    setCurrentBoard(previousBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    setWinner(null);
  };

  const resetGame = () => {
    setCurrentBoard(
      Array(size)
        .fill(null)
        .map(() => Array(size).fill(null))
    );
    setHistory([]);
    setCurrentPlayer(initialPlayer);
    setWinner(null);
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className='center'>
      <div>
        <h2>{winner ? `Player ${winner} wins!` : `Current Player: ${currentPlayer}`}</h2>
        <Board x={size} y={size} currentBoard={currentBoard} onFieldClick={onFieldClick} />
        <div style={{ marginTop: '20px' }}>
          <button onClick={undoLastMove} disabled={history.length === 0}>
            Undo Last Move
          </button>
          <button onClick={resetGame} style={{ marginLeft: '10px' }}>
            Reset Game
          </button>
          <button onClick={goToHome} style={{ marginLeft: '10px' }}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Game;
