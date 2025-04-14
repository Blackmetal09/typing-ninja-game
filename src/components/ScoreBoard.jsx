// src/components/ScoreBoard.jsx

import React from 'react';

const ScoreBoard = ({ score, timeLeft, level, mistakes }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '25px',
      padding: '15px',
      backgroundColor: 'rgba(10, 5, 40, 0.6)',
      borderRadius: '5px',
      fontSize: '16px',
      border: '1px solid rgba(0, 221, 255, 0.2)', // Cyan border outline
      boxShadow: '0 0 10px rgba(123, 0, 255, 0.15) inset', // Purple inset shadow
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Scanner Animation Div */}
      <div className="scanner" style={{
        position: 'absolute',
        top: 0,
        left: '-100%',
        width: '50%',
        height: '100%',
        background: 'linear-gradient(90deg, transparent, rgba(0, 221, 255, 0.1), transparent)',
        animation: 'scan 3s linear infinite',
      }}></div>
      <style>{`
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 200%; }
        }
      `}</style>

      {/* Left Side: Score and Level */}
      <div>
        {/* Score */}
        <div style={{ marginBottom: '5px' }}>
          <span style={{ color: '#0df', fontWeight: 'bold' }}>SCORE:</span> {/* Cyan Label */}
          {' '} {/* Space */}
          <span style={{ color: '#fff', textShadow: '0 0 5px #0df' }}>{score}</span> {/* White Value */}
        </div>
        {/* Level */}
        <div>
          <span style={{ color: '#f0c', fontWeight: 'bold' }}>LEVEL:</span> {/* Pink Label */}
          {' '} {/* Space */}
          <span style={{ color: '#fff', textShadow: '0 0 5px #f0c' }}>{level}</span> {/* White Value */}
        </div>
      </div>

      {/* Right Side: Time and Errors */}
      <div style={{ textAlign: 'right' }}>
        {/* Time display */}
        <div style={{
          color: timeLeft < 10 ? '#f0c' : '#0df', // Changes color based on time left
          fontWeight: timeLeft < 10 ? 'bold' : 'normal',
          textShadow: timeLeft < 10 ? '0 0 5px #f0c, 0 0 10px #f0c' : '0 0 5px #0df',
          marginBottom: '5px',
         }}>
          TIME: {timeLeft}s {/* Label included here */}
        </div>
        {/* Errors display */}
        <div>
          {/* *** MODIFICATION HERE: Label color changed to green *** */}
          <span style={{ color: '#00ff00', fontWeight: 'bold' }}>ERRORS:</span>
          {/* *** END MODIFICATION *** */}
          {' '} {/* Space */}
          {/* Error dots */}
          {[1,2,3,4,5].map(i => (
            <span key={i} style={{
              color: i <= mistakes ? '#f0c' : '#333', // Error dots are pink when active
              marginLeft: '4px',
              textShadow: i <= mistakes ? '0 0 5px #f0c' : 'none',
            }}>●</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;