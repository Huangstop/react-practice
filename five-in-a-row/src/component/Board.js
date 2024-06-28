import React from 'react';
import Field from './Field';

function Board({ x, y, currentBoard, onFieldClick }) {
  const board = [];

  for (let yi = 0; yi < y; yi++) {
    const fields = [];
    for (let xi = 0; xi < x; xi++) {
      fields.push(
        <Field
          key={yi * x + xi}
          x={xi}
          y={yi}
          currentBoard={currentBoard}
          onClick={() => onFieldClick(xi, yi)}
        />
      );
    }
    board.push(<div key={yi} className="board-row">{fields}</div>);
  }

  return <>{board}</>;
}

export default Board;
