// src/components/GameOver.jsx

import React from 'react';

const GameOver = ({ score, wordCount, resetGame, onQuit }) => {
  return (
    <div style={{
      textAlign: 'center',
      animation: 'fadeIn 0.5s',
    }}>
      {/* Title Section */}
      <h2 style={{
        color: '#f0c', // Pink title
        marginBottom: '20px',
        textShadow: '0 0 10px #f0c, 0 0 20px rgba(255, 0, 170, 0.5)',
        letterSpacing: '2px',
        fontSize: '28px'
      }}>SECURITY BREACH DETECTED</h2>
      <h3 style={{
        color: '#0df', // Cyan subtitle
        textShadow: '0 0 5px #0df',
        letterSpacing: '1px',
        position: 'relative',
        display: 'inline-block',
      }}>MISSION REPORT
        <div style={{
          position: 'absolute',
          bottom: '-5px',
          left: '0',
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #0df, transparent)',
        }}></div>
      </h3>

      {/* Stats Section - WITH GREEN LABELS */}
      <div style={{
        margin: '30px 0',
        lineHeight: '1.8',
        backgroundColor: 'rgba(10, 5, 40, 0.6)',
        padding: '20px',
        borderRadius: '5px',
        border: '1px solid rgba(0, 221, 255, 0.2)', // Cyan border outline
        boxShadow: '0 0 15px rgba(123, 0, 255, 0.2) inset', // Purple inset shadow
      }}>
        {/* Score */}
        <div>
          {/* Label Span - CHANGED TO GREEN */}
          <span style={{ color: '#00ff00' }}>Score:</span>
          {' '} {/* Space */}
          {/* Value Span (Cyan) */}
          <span style={{ color: '#0df', fontWeight: 'bold', textShadow: '0 0 5px #0df' }}>{score}</span>
        </div>

        {/* Words Typed */}
        <div>
          {/* Label Span - CHANGED TO GREEN */}
          <span style={{ color: '#00ff00' }}>Words Typed:</span>
          {' '} {/* Space */}
          {/* Value Span (Cyan) */}
          <span style={{ color: '#0df', fontWeight: 'bold', textShadow: '0 0 5px #0df' }}>{wordCount}</span>
        </div>

        {/* Typing Skill */}
        <div>
           {/* Label Span - CHANGED TO GREEN */}
           <span style={{ color: '#00ff00' }}>Typing Skill:</span>
           {' '} {/* Space */}
           {/* Value Span (Pink) */}
           <span style={{ color: '#f0c', fontWeight: 'bold', textShadow: '0 0 5px #f0c' }}>
            {score < 100 ? 'Novice Ninja' :
             score < 200 ? 'Skilled Shinobi' :
             score < 300 ? 'Master Infiltrator' : 'Shadow Grandmaster'}
           </span>
        </div>
      </div>

      {/* Buttons Section */}
      {/* Retry Button (Cyan theme) */}
      <button
        onClick={resetGame}
        style={{
          padding: '12px 30px',
          fontSize: '18px',
          backgroundColor: 'rgba(10, 5, 40, 0.8)',
          color: '#0df', // Cyan text
          border: '2px solid #0df', // Cyan border
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: "'Courier New', monospace",
          letterSpacing: '2px',
          boxShadow: '0 0 15px rgba(0, 221, 255, 0.4)', // Cyan shadow
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseOver={e => {
          e.target.style.backgroundColor = 'rgba(0, 221, 255, 0.2)';
          e.target.style.boxShadow = '0 0 20px rgba(0, 221, 255, 0.6), 0 0 30px rgba(255, 0, 170, 0.3) inset';
          e.target.style.color = '#fff';
          e.target.style.borderColor = '#0df';
        }}
        onMouseOut={e => {
          e.target.style.backgroundColor = 'rgba(10, 5, 40, 0.8)';
          e.target.style.boxShadow = '0 0 15px rgba(0, 221, 255, 0.4)';
          e.target.style.color = '#0df';
          e.target.style.borderColor = '#0df';
        }}
      >
        <span style={{ position: 'relative', zIndex: 2 }}>RETRY MISSION</span>
        {/* Shine Effect */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: '-100%',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, transparent, rgba(0, 221, 255, 0.3), transparent)',
          zIndex: 1,
          animation: 'shine 3s infinite',
        }}></div>
      </button>

      {/* Return to Menu Button (Pink theme) */}
      <button
        onClick={onQuit} // Calls the quitGame function passed down from App
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: 'rgba(10, 5, 40, 0.7)',
          color: '#f0c', // Pink text
          border: '1px solid #f0c', // Pink border
          borderRadius: '5px',
          cursor: 'pointer',
          fontFamily: "'Courier New', monospace",
          letterSpacing: '1px',
          boxShadow: '0 0 10px rgba(255, 0, 170, 0.3)', // Pink shadow
          transition: 'all 0.2s ease',
        }}
        onMouseOver={e => {
          e.target.style.backgroundColor = 'rgba(255, 0, 170, 0.2)';
          e.target.style.boxShadow = '0 0 15px rgba(255, 0, 170, 0.5)';
        }}
        onMouseOut={e => {
          e.target.style.backgroundColor = 'rgba(10, 5, 40, 0.7)';
          e.target.style.boxShadow = '0 0 10px rgba(255, 0, 170, 0.3)';
        }}
      >
        RETURN TO MENU
      </button>

      {/* Styles for animations */}
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default GameOver;