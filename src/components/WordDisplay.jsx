import React from 'react';

const WordDisplay = ({ word, userInput, animation }) => {
  // Split the word into characters to style each one
  const characters = word.word.split('').map((char, index) => {
    let charClass = '';
    
    if (index < userInput.length) {
      charClass = userInput[index] === char ? 'correct' : 'incorrect';
    }
    
    return (
      <span 
        key={index} 
        style={{
          color: charClass === 'correct' ? '#0df' : 
                 charClass === 'incorrect' ? '#f0c' : '#ffffff',
          fontWeight: charClass ? 'bold' : 'normal',
          textShadow: charClass === 'correct' ? '0 0 5px #0df, 0 0 10px #0df' : 
                      charClass === 'incorrect' ? '0 0 5px #f0c, 0 0 10px #f0c' : 'none',
        }}
      >
        {char}
      </span>
    );
  });

  return (
    <div 
      style={{
        fontSize: '38px',
        letterSpacing: '3px',
        marginBottom: '30px',
        padding: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        backgroundColor: 'rgba(10, 5, 30, 0.7)',
        border: '1px solid rgba(0, 221, 255, 0.3)',
        transform: animation === 'success' ? 'scale(1.05)' : 
                  animation === 'error' ? 'translateX(10px)' : 'none',
        transition: 'all 0.2s ease',
        boxShadow: '0 0 15px rgba(0, 221, 255, 0.2) inset',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: 'linear-gradient(90deg, transparent, #0df, transparent)',
        animation: 'scan-line 2s linear infinite',
        opacity: 0.6,
      }}></div>
      <style>{`
        @keyframes scan-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
      {characters}
    </div>
  );
};

export default WordDisplay;