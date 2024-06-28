import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import Home from './Home';
import Game from './Game';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game/:initialPlayer" element={<GameWrapper />} />
      </Routes>
    </Router>
  );
}

function GameWrapper() {
  const { initialPlayer } = useParams();
  return <Game initialPlayer={initialPlayer} />;
}

export default App;
