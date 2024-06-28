import React from 'react';

function Field({ x, y, currentBoard, onClick }) {
  return (
    <button className="field" onClick={onClick}>
      {currentBoard[y][x]}
    </button>
  );
}

export default Field;
