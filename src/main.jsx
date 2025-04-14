// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Import the updated App component from App.jsx
import './index.css'; // Optional Vite global styles

// Ensure this ID matches the div in your public/index.html (usually 'root')
const container = document.getElementById('root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Fatal Error: Root element not found. Check public/index.html for <div id='root'></div>");
}