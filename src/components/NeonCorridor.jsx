import React, { useState, useEffect } from 'react';

const NeonCorridor = ({ progress }) => {
  const [corridorPosition, setCorridorPosition] = useState(0);
  
  useEffect(() => {
    setCorridorPosition(progress);
  }, [progress]);
  
  return (
    <div className="corridor-container" style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      perspective: '1000px',
      overflow: 'hidden',
      zIndex: 0,
    }}>
      <div className="corridor" style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%',
        height: '100%',
        transform: `translate(-50%, -50%) translateZ(${-corridorPosition * 20}px)`,
        transition: 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      }}>
        {/* Floor */}
        <div style={{
          position: 'absolute',
          bottom: '-50%',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(10, 5, 40, 0.8), transparent)',
          transform: 'rotateX(90deg)',
          transformOrigin: 'bottom',
          backgroundImage: `repeating-linear-gradient(90deg, rgba(0, 221, 255, 0.15) 0px, rgba(0, 221, 255, 0.15) 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '30px 100%',
          perspectiveOrigin: 'center',
        }} />
        
        {/* Ceiling */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to bottom, rgba(10, 5, 40, 0.8), transparent)',
          transform: 'rotateX(-90deg)',
          transformOrigin: 'top',
          backgroundImage: `repeating-linear-gradient(90deg, rgba(255, 0, 170, 0.15) 0px, rgba(255, 0, 170, 0.15) 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '30px 100%',
        }} />
        
        {/* Left wall */}
        <div style={{
          position: 'absolute',
          left: '-50%',
          top: '0',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to right, rgba(10, 5, 40, 0.8), transparent)',
          transform: 'rotateY(90deg)',
          transformOrigin: 'left',
          backgroundImage: `repeating-linear-gradient(0deg, rgba(0, 221, 255, 0.15) 0px, rgba(0, 221, 255, 0.15) 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '100% 30px',
        }} />
        
        {/* Right wall */}
        <div style={{
          position: 'absolute',
          right: '-50%',
          top: '0',
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to left, rgba(10, 5, 40, 0.8), transparent)',
          transform: 'rotateY(-90deg)',
          transformOrigin: 'right',
          backgroundImage: `repeating-linear-gradient(0deg, rgba(255, 0, 170, 0.15) 0px, rgba(255, 0, 170, 0.15) 1px, transparent 1px, transparent 30px)`,
          backgroundSize: '100% 30px',
        }} />
        
        {/* End wall (vanishing point) */}
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transform: 'translateZ(-1000px) scale(2)',
          background: 'radial-gradient(circle at center, rgba(255, 0, 170, 0.7) 0%, rgba(10, 5, 40, 0.8) 60%)',
        }} />
        
        {/* Neon strips for walls */}
        <div style={{
          position: 'absolute',
          left: '0',
          top: '25%',
          width: '100%',
          height: '3px',
          background: 'linear-gradient(90deg, #0df, transparent)',
          boxShadow: '0 0 15px #0df, 0 0 20px #0df',
          opacity: 0.7,
          transform: 'translateZ(-500px)',
        }} />
        
        <div style={{
          position: 'absolute',
          right: '0',
          top: '75%',
          width: '100%',
          height: '3px',
          background: 'linear-gradient(90deg, transparent, #f0c)',
          boxShadow: '0 0 15px #f0c, 0 0 20px #f0c',
          opacity: 0.7,
          transform: 'translateZ(-500px)',
        }} />
        
        {/* Random floating neon particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 2}px`,
            height: `${Math.random() * 5 + 2}px`,
            borderRadius: '50%',
            background: Math.random() > 0.5 ? '#0df' : '#f0c',
            boxShadow: Math.random() > 0.5 ? '0 0 5px #0df, 0 0 10px #0df' : '0 0 5px #f0c, 0 0 10px #f0c',
            opacity: Math.random() * 0.7 + 0.3,
            transform: `translateZ(${-Math.random() * 1000}px)`,
            animation: `float-particle ${Math.random() * 10 + 5}s infinite linear`,
          }} />
        ))}
      </div>
      
      <style>{`
        @keyframes float-particle {
          0% { transform: translateZ(0) translateX(0) translateY(0); }
          25% { transform: translateZ(-250px) translateX(20px) translateY(-20px); }
          50% { transform: translateZ(-500px) translateX(-20px) translateY(20px); }
          75% { transform: translateZ(-750px) translateX(20px) translateY(-20px); }
          100% { transform: translateZ(-1000px) translateX(0) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default NeonCorridor;