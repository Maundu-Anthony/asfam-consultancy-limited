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
  
  // Leave intentional gradients and backgrounds intact; only clear obvious watermark backgrounds
  if (document.body.style.backgroundImage && document.body.style.backgroundImage.includes('watermark')) {
    document.body.style.backgroundImage = 'none';
  }
  document.body.style.background = '#ffffff';
  
  const rootElement = document.getElementById('root');
  if (rootElement && rootElement.style.backgroundImage && rootElement.style.backgroundImage.includes('watermark')) {
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