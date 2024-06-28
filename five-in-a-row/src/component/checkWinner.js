// checkWinner.js
function checkWinner(board, x, y, currentPlayer) {
  const directions = [
    [1, 0], // 橫向
    [0, 1], // 縱向
    [1, 1], // 右下斜向
    [1, -1] // 左下斜向
  ];

  for (let direction of directions) {
    const [dx, dy] = direction;
    let count = 1;

    for (let i = 1; i <= 4; i++) {
      const nx = x + dx * i;
      const ny = y + dy * i;
      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length && board[ny][nx] === currentPlayer) {
        count++;
      } else {
        break;
      }
    }

    for (let i = 1; i <= 4; i++) {
      const nx = x - dx * i;
      const ny = y - dy * i;
      if (nx >= 0 && nx < board.length && ny >= 0 && ny < board[0].length && board[ny][nx] === currentPlayer) {
        count++;
      } else {
        break;
      }
    }

    if (count >= 5) {
      return true;
    }
  }

  return false;
}

export default checkWinner;
