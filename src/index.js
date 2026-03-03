import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// WATERMARK DESTROYER - Run before React renders
(function destroyWatermarks() {
  // Remove any existing watermark elements
  const watermarkSelectors = [
    '[class*="watermark"]',
    '[id*="watermark"]',
    '[class*="wm"]',
    '[id*="wm"]',
    'canvas.watermark',
    'div[class*="logo"]',
    'img[src*="logo.svg"]'
  ];
  
  watermarkSelectors.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      if (!el.closest('.header') && !el.closest('header')) {
        el.remove();
      }
    });
  });
  
  // Clear any background images from body and root
  document.body.style.backgroundImage = 'none';
  document.body.style.background = '#ffffff';
  
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.style.backgroundImage = 'none';
  }
})();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();