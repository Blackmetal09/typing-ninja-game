import React from 'react';

const MainMenu = ({ onStartGame }) => {
  return (
    <div style={{
      width: '600px',
      maxWidth: '90%',
      padding: '40px 30px',
      borderRadius: '10px',
      backgroundColor: 'rgba(15, 10, 40, 0.85)',
      border: '2px solid #0df',
      boxShadow: '0 0 25px rgba(0, 221, 255, 0.6), 0 0 40px rgba(123, 0, 255, 0.3) inset',
      position: 'relative',
      zIndex: 1,
      textAlign: 'center',
    }}>
      <div className="logo" style={{
        marginBottom: '50px',
      }}>
        <h1 style={{ 
          margin: '0 0 5px 0',
          fontFamily: "'Courier New', monospace",
          fontSize: '62px',
          letterSpacing: '3px',
          textShadow: '0 0 10px #0df, 0 0 20px #0df, 0 0 30px rgba(255, 0, 170, 0.5)',
          color: '#fff',
          position: 'relative',
        }}>
          <span style={{ color: '#0df' }}>TYPI</span>NG <span style={{ color: '#f0c' }}>NINJA</span>
        </h1>
        <div style={{ 
          fontSize: '16px', 
          color: '#0df',
          letterSpacing: '1px',
          opacity: 0.9,
        }}>
          CYBERNETIC INFILTRATION SYSTEMS<span style={{ animation: 'blink 1s infinite' }}>_</span>
        </div>
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 0; }
            50% { opacity: 1; }
          }
        `}</style>
      </div>
      
      <div className="menu-buttons" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '25px',
      }}>
        <button 
          onClick={onStartGame}
          className="menu-button"
          style={{
            width: '250px',
            padding: '15px',
            fontSize: '22px',
            backgroundColor: 'rgba(10, 5, 40, 0.8)',
            color: '#0df',
            border: '2px solid #0df',
            borderRadius: '5px',
            cursor: 'pointer',
            fontFamily: "'Courier New', monospace",
            letterSpacing: '2px',
            boxShadow: '0 0 15px rgba(0, 221, 255, 0.4)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}
          onMouseOver={e => {
            e.target.style.backgroundColor = 'rgba(0, 221, 255, 0.2)';
            e.target.style.boxShadow = '0 0 20px rgba(0, 221, 255, 0.6), 0 0 30px rgba(255, 0, 170, 0.3) inset';
            e.target.style.color = '#fff';
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = 'rgba(10, 5, 40, 0.8)';
            e.target.style.boxShadow = '0 0 15px rgba(0, 221, 255, 0.4)';
            e.target.style.color = '#0df';
          }}
        >
          <span style={{ position: 'relative', zIndex: 2 }}>START MISSION</span>
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
        
        <div style={{
          fontSize: '14px',
          color: '#f0c',
          opacity: 0.7,
          marginTop: '30px',
          letterSpacing: '1px',
        }}>
          TYPE SECURITY CODES QUICKLY TO BYPASS<br />
          CORPORATE CYBERSECURITY SYSTEMS
        </div>
      </div>
      
      <div className="decoration" style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        width: '30px',
        height: '30px',
        borderTop: '2px solid #0df',
        borderRight: '2px solid #0df',
        opacity: 0.8,
      }}></div>
      
      <div className="decoration" style={{
        position: 'absolute',
        bottom: '15px',
        left: '15px',
        width: '30px',
        height: '30px',
        borderBottom: '2px solid #f0c',
        borderLeft: '2px solid #f0c',
        opacity: 0.8,
      }}></div>
      
      <style>{`
        @keyframes shine {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default MainMenu;