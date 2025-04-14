// src/components/Game.jsx

import React, { useState, useEffect, useCallback } from 'react';
import WordDisplay from './WordDisplay';
import InputField from './InputField';
import ScoreBoard from './ScoreBoard';
import GameOver from './GameOver';
import { getRandomWord } from '../words';
import useSound from 'use-sound'; // Use the real hook

// Import sound files
import successSound from '/sounds/correct.mp3';
import errorSound from '/sounds/error.mp3';


const Game = ({ onWordComplete, onQuit }) => {
  // --- State variables ---
  const [currentWord, setCurrentWord] = useState({ word: '', prompt: '' });
  const [userInput, setUserInput] = useState(''); // Current value in the input field
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [timeBoost, setTimeBoost] = useState(false);
  const [showBoost, setShowBoost] = useState(false);
  const [level, setLevel] = useState(1);
  const [wordStreak, setWordStreak] = useState(0);
  const [showWordStreak, setShowWordStreak] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [animation, setAnimation] = useState('');
  // --- ---

  // --- Sound Hooks ---
  const [playSuccess] = useSound(successSound, { volume: 0.6 });
  const [playError] = useSound(errorSound, { volume: 0.6 });
  // --- ---

  // --- Game Initialization Logic ---
  useEffect(() => {
    const randomBoost = Math.random() < 0.3;
    const effectiveLevel = randomBoost ? Math.min(level + 1, 6) : level;
    setCurrentWord(getRandomWord(effectiveLevel));
  }, [level]);

  // --- Time Boost Appearance Logic ---
  useEffect(() => {
    if (!gameOver) {
      const boostInterval = setInterval(() => {
        const shouldShowBoost = Math.random() < 0.3;
        if (shouldShowBoost && !showBoost) {
          setShowBoost(true);
          const hideTimer = setTimeout(() => setShowBoost(false), 5000);
          return () => clearTimeout(hideTimer); // Cleanup hide timer
        }
      }, 10000);
      return () => clearInterval(boostInterval); // Cleanup interval
    }
  }, [gameOver, showBoost]);

  // --- Collect Time Boost Function ---
  const collectTimeBoost = () => {
    if (!gameOver) {
      setTimeLeft(prevTime => Math.min(prevTime + 5, 99));
      setShowBoost(false);
      setTimeBoost(true);
      setTimeout(() => setTimeBoost(false), 1000);
    }
  };

  // --- Game Timer Logic ---
  useEffect(() => {
    let timer;
    if (timeLeft > 0 && !gameOver) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && !gameOver) {
      setGameOver(true);
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameOver]);

  // --- User Input Handling ---
  const handleInputChange = useCallback((e) => {
    if (gameOver) return;

    const newInput = e.target.value;
    const previousInput = userInput; // Get the input value *before* this change

    // Update the state for rendering. Note: state updates are async,
    // so we use 'newInput' and 'previousInput' for immediate logic.
    setUserInput(newInput);

    // --- Check for Correct Word (Full Match) ---
    if (newInput === currentWord.word) {
      playSuccess();
      setScore(prevScore => prevScore + currentWord.word.length * level);
      setUserInput(''); // Reset input field *after* processing
      setWordCount(prevCount => prevCount + 1);
      setAnimation('success');
      setTimeout(() => setAnimation(''), 500); // Clear animation

      const newWordStreak = wordStreak + 1;
      setWordStreak(newWordStreak);
      if (newWordStreak > 0 && newWordStreak % 5 === 0) {
        setTimeLeft(prevTime => Math.min(prevTime + 5, 99));
        setShowWordStreak(true);
        setTimeout(() => setShowWordStreak(false), 2000);
      } else {
         setTimeLeft(prevTime => Math.min(prevTime + 2, 99));
      }

      if (onWordComplete) {
        onWordComplete();
      }

      const nextLevel = (wordCount + 1) % 5 === 0 ? Math.min(level + 1, 6) : level;
      if (nextLevel > level) {
        setLevel(nextLevel);
      }

      const randomBoost = Math.random() < 0.3;
      const effectiveLevel = randomBoost ? Math.min(nextLevel + 1, 6) : nextLevel;
      setCurrentWord(getRandomWord(effectiveLevel));

      // NOTE: Don't reset input field here yet, it happens after setting new word if needed
      // setUserInput(''); // Move reset to after setting new word if that's desired

    // --- *** MODIFIED ERROR CHECK *** ---
    // Check if a character was ADDED (newInput is longer) AND the result is NOT a valid prefix
    } else if (newInput.length > previousInput.length && !currentWord.word.startsWith(newInput)) {
      // Only trigger the error sound, mistake count, and animation reset
      // when adding a character results in a non-prefix.
      // Backspacing (which makes newInput shorter) will not trigger this block.
      playError();
      setMistakes(prevMistakes => {
        const newMistakes = prevMistakes + 1;
        if (newMistakes >= 5) {
          setGameOver(true); // Trigger game over on reaching mistake limit
        }
        return newMistakes;
      });
      setAnimation('error');
      setTimeout(() => setAnimation(''), 500); // Clear animation
      setWordStreak(0); // Reset streak on mistake
    }
    // --- *** END MODIFIED ERROR CHECK *** ---

    // If the input is shorter (backspace) or still a valid prefix,
    // no mistake is counted here, no error sound plays here.
    // The WordDisplay component will still show incorrect letters in red based on the current userInput.

  }, [
      gameOver,
      currentWord,
      level,
      wordCount,
      wordStreak,
      onWordComplete,
      playSuccess,
      playError,
      userInput // <<< Add userInput as a dependency because we read it for previousInput
     ]);

  // --- Reset Game Function ---
  const resetGame = useCallback(() => {
    setLevel(1);
    setCurrentWord(getRandomWord(1)); // Get word for level 1 AFTER setting level state
    setUserInput('');
    setScore(0);
    setTimeLeft(15);
    setGameOver(false);
    setWordCount(0);
    setMistakes(0);
    setWordStreak(0);
    setShowWordStreak(false);
    setShowBoost(false);
    setTimeBoost(false);
    setAnimation('');
  }, []); // resetGame likely doesn't need dependencies if it only sets state


  // --- JSX Rendering ---
  return (
    <div style={{ /* ... Container styles ... */
      width: '600px', maxWidth: '90%', padding: '30px', borderRadius: '10px',
      backgroundColor: 'rgba(15, 10, 40, 0.85)', border: '2px solid #0df',
      boxShadow: '0 0 25px rgba(0, 221, 255, 0.6), 0 0 40px rgba(123, 0, 255, 0.3) inset',
      position: 'relative', zIndex: 1,
    }}>
      {/* Quit Button */}
      <button onClick={onQuit} style={{ /* ... Quit button styles ... */
          position: 'absolute', top: '10px', right: '10px', padding: '8px 12px',
          fontSize: '14px', backgroundColor: 'rgba(10, 5, 40, 0.7)', color: '#f0c',
          border: '1px solid #f0c', borderRadius: '5px', cursor: 'pointer',
          fontFamily: "'Courier New', monospace", letterSpacing: '1px',
          boxShadow: '0 0 10px rgba(255, 0, 170, 0.3)', transition: 'all 0.2s ease',
          zIndex: 5,
        }}
        onMouseOver={e => { e.target.style.backgroundColor = 'rgba(255, 0, 170, 0.2)'; e.target.style.boxShadow = '0 0 15px rgba(255, 0, 170, 0.5)'; }}
        onMouseOut={e => { e.target.style.backgroundColor = 'rgba(10, 5, 40, 0.7)'; e.target.style.boxShadow = '0 0 10px rgba(255, 0, 170, 0.3)'; }}
      >
        EXIT
      </button>

      {!gameOver ? (
        <>
          {/* Visual Effects (Boosts/Streaks) */}
          {timeBoost && ( <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '42px', color: '#0df', fontWeight: 'bold', textShadow: '0 0 15px #0df, 0 0 25px #0df', zIndex: 10, pointerEvents: 'none', animation: 'timeBoostAnim 1s forwards', }}>+5s</div> )}
          {showWordStreak && ( <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '38px', color: '#f0c', fontWeight: 'bold', textShadow: '0 0 15px #f0c, 0 0 25px #f0c', zIndex: 10, pointerEvents: 'none', animation: 'streakBoostAnim 2s forwards', }}>STREAK BONUS +5s</div> )}
          {showBoost && ( <div onClick={collectTimeBoost} style={{ position: 'absolute', top: '20px', left: '20px', width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(0, 221, 255, 0.2)', border: '2px solid #0df', boxShadow: '0 0 15px #0df, 0 0 5px #0df inset', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', animation: 'pulseBoost 1.5s infinite', zIndex: 5, }}> <div style={{ fontSize: '22px', color: '#fff', fontWeight: 'bold', textShadow: '0 0 5px #0df', }}>+5</div> </div> )}

          {/* Game Title and Prompt */}
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
             <h1 style={{ margin: '0 0 10px 0', fontFamily: "'Courier New', monospace", fontSize: '42px', letterSpacing: '3px', textShadow: '0 0 10px #0df, 0 0 20px #0df, 0 0 30px rgba(255, 0, 170, 0.5)', color: '#fff', position: 'relative', }}>
              <span style={{ color: '#0df' }}>TYPI</span>NG <span style={{ color: '#f0c' }}>NINJA</span>
            </h1>
            <div style={{ fontSize: '14px', opacity: 0.9, letterSpacing: '1px', color: '#0df' }}>
              {currentWord.prompt || "SECURITY BYPASS IN PROGRESS"}<span style={{ animation: 'blink 1s infinite' }}>...</span>
            </div>
            {/* Embedded Styles for Animations */}
            <style>{`
              @keyframes blink { 0%, 100% { opacity: 0; } 50% { opacity: 1; } }
              @keyframes pulseBoost { 0% { transform: scale(1); opacity: 0.7; } 50% { transform: scale(1.1); opacity: 1; } 100% { transform: scale(1); opacity: 0.7; } }
              @keyframes timeBoostAnim { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 50% { opacity: 1; transform: translate(-50%, -50%) scale(1.5); } 100% { opacity: 0; transform: translate(-50%, -50%) scale(2); } }
              @keyframes streakBoostAnim { 0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); } 20% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); } 80% { opacity: 1; transform: translate(-50%, -50%) scale(1.2); } 100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); } }
            `}</style>
          </div>

          {/* Scoreboard, Word Display, Input Field */}
          <ScoreBoard score={score} timeLeft={timeLeft} level={level} mistakes={mistakes} />
          <WordDisplay word={currentWord} userInput={userInput} animation={animation} />
          <InputField
            value={userInput}
            onChange={handleInputChange}
            placeholder="Type the code..."
            disabled={gameOver} // Pass disabled state
          />
        </>
      ) : (
        // Render GameOver component
        <GameOver
          score={score}
          wordCount={wordCount}
          resetGame={resetGame}
          onQuit={onQuit}
        />
      )}
    </div>
  );
};

export default Game;