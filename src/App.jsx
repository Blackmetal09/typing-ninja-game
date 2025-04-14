// src/App.jsx

import React, { useState } from 'react';

// --- Corrected Import Paths ---
import Game from './components/Game';             // Path to Game component
import NeonCorridor from './components/NeonCorridor'; // Path to NeonCorridor component
import MainMenu from './components/MainMenu';     // Path to MainMenu component
// --- End Corrected Import Paths ---

const App = () => {
  const [corridorProgress, setCorridorProgress] = useState(0);
  const [gameState, setGameState] = useState('menu'); // 'menu' or 'playing'

  const handleWordComplete = () => {
    // Only advance corridor if actually playing
    if (gameState === 'playing') {
       setCorridorProgress(prev => prev + 1);
    }
  };

  const startGame = () => {
    console.log("Starting game..."); // Debug log
    setGameState('playing');
    setCorridorProgress(0); // Reset corridor when starting
  };

  const quitGame = () => {
    console.log("Quitting game / Returning to menu..."); // Debug log
    setGameState('menu');
    // Optionally reset corridor progress here too if you want it reset immediately
    // setCorridorProgress(0);
  };

  // Determine whether to show the corridor based on game state
  const showCorridor = gameState === 'playing';

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0f0f2d 0%, #1a0b2e 50%, #0d0221 100%)',
      fontFamily: "'Courier New', monospace",
      // color: '#00ff41', // Base text color (less important now)
      overflow: 'hidden',
      position: 'relative',
    }}>
      {/* Conditionally render NeonCorridor only when playing */}
      {showCorridor && <NeonCorridor progress={corridorProgress} />}

      {/* Render MainMenu or Game based on gameState */}
      {gameState === 'menu' ? (
        <MainMenu onStartGame={startGame} />
      ) : (
        // Pass BOTH onWordComplete and onQuit to the Game component
        <Game
           onWordComplete={handleWordComplete}
           onQuit={quitGame}
        />
      )}
    </div>
  );
};

export default App; // Standard export