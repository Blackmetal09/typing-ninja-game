// src/components/InputField.jsx

import React, { useRef, useEffect } from 'react';

// Accept disabled prop from parent (Game.jsx)
const InputField = ({ value, onChange, placeholder, disabled }) => {
  const inputRef = useRef(null);

  // Auto-focus the input field when component mounts or becomes enabled
  useEffect(() => {
    // Only focus if not disabled
    if (!disabled && inputRef.current) {
      inputRef.current.focus();
    }
  }, [disabled]); // Re-run effect if disabled status changes

  return (
    <div style={{ position: 'relative' }}> {/* Container for input and decorations */}
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled} // Apply disabled state to the input element
        style={{
          // *** MODIFICATION HERE: Adjust width to create right gap ***
          width: 'calc(100% - 0px)', // Make input slightly less than full width
          // *** END MODIFICATION ***
          padding: '15px', // Internal padding for text
          fontSize: '20px',
          backgroundColor: disabled ? 'rgba(10, 5, 30, 0.4)' : 'rgba(10, 5, 30, 0.7)', // Dim if disabled
          color: disabled ? '#aaa' : '#0df', // Dim text if disabled
          border: '2px solid #0df',
          borderRadius: '5px',
          outline: 'none',
          caretColor: '#0df',
          boxShadow: '0 0 15px rgba(0, 221, 255, 0.4)',
          letterSpacing: '1px',
          fontFamily: 'monospace',
          transition: 'all 0.2s ease',
          cursor: disabled ? 'not-allowed' : 'text', // Change cursor when disabled
          boxSizing: 'border-box', // Ensure padding/border are included in width calculation
        }}
        // Prevent focus styling if disabled
        onFocus={(e) => {
          if (!disabled) {
            e.target.style.boxShadow = '0 0 20px rgba(0, 221, 255, 0.6), 0 0 30px rgba(255, 0, 170, 0.2) inset';
          }
        }}
        onBlur={(e) => {
           // Reset to default shadow regardless of disabled state on blur
           e.target.style.boxShadow = '0 0 15px rgba(0, 221, 255, 0.4)';
        }}
      />

      {/* Right Side Pulsing Dot (position relative to the input element) */}
      <div
        style={{
          position: 'absolute',
          right: '30px', // 8px from the right edge of the CONTAINER div
          top: '50%',
          transform: 'translateY(-50%)',
          width: '8px',
          height: '8px',
          background: '#0df',
          borderRadius: '50%',
          boxShadow: '0 0 10px #0df, 0 0 20px #0df',
          animation: 'pulse 1.5s infinite',
          opacity: disabled ? 0.4 : 1, // Dim if disabled
          // Adjust positioning slightly if needed due to parent width change:
          // Since input is narrower, the dot is relative to the outer div,
          // which might make it appear slightly further left than expected.
          // If needed, increase 'right' slightly (e.g., right: '12px')
          // But start with 8px as it might look correct.

        }}
      />

      {/* Left Side Angled Decoration (position relative to the input element) */}
      <div
        style={{
          position: 'absolute',
          left: '18px', // 8px from the left edge of the CONTAINER div
          top: '8px',
          width: '40px',
          height: '10px',
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0% 100%)',
          background: 'linear-gradient(90deg, #f0c, transparent)',
          opacity: disabled ? 0.3 : 0.6, // Dim if disabled
        }}
      />

      {/* Animation Styles */}
      <style>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: translateY(-50%) scale(0.8); }
          50% { opacity: 1; transform: translateY(-50%) scale(1.2); }
          100% { opacity: 0.3; transform: translateY(-50%) scale(0.8); }
        }
      `}</style>
    </div>
  );
};

export default InputField;