import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const startGame = (player) => {
    navigate(`/game/${player}`);
  };

  return (
    <div className="center">
        <div>
            <h1>Five In A Row</h1>
            <button onClick={() => startGame('X')}>Start as X</button>
            <button onClick={() => startGame('O')} style={{ marginLeft: '10px' }}>
                Start as O
            </button>
        </div>
    </div>
  );
}

export default Home;
