import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Contact from './pages/Contact';
import './App.css';

function App() {
  useEffect(() => {
    // Aggressive watermark removal
    const removeWatermarks = () => {
      // Target all possible watermark sources
      const elements = document.querySelectorAll('*');
      
      elements.forEach(el => {
        const style = window.getComputedStyle(el);
        const className = el.className || '';
        const id = el.id || '';
        
        // Check if it's a watermark element
        if (
          className.includes('watermark') ||
          id.includes('watermark') ||
          className.includes('wm') ||
          style.backgroundImage.includes('logo') ||
          style.backgroundImage.includes('watermark')
        ) {
          // Don't remove if it's inside the header
          if (!el.closest('.header') && !el.closest('header') && !el.closest('nav')) {
            el.style.display = 'none';
            el.style.visibility = 'hidden';
            el.style.opacity = '0';
            el.remove();
          }
        }
        
        // Only clear background images for watermark-like elements so intentional gradients stay intact
        const isWatermarkLike = (
          className.includes('watermark') ||
          id.includes('watermark') ||
          className.includes('wm') ||
          style.backgroundImage.includes('logo') ||
          style.backgroundImage.includes('watermark')
        );

        if (isWatermarkLike && !el.closest('.header') && !el.closest('header') && !el.closest('.page-header')) {
          if (style.backgroundImage !== 'none') {
            el.style.backgroundImage = 'none';
          }
        }
      });
      
      // Specifically target body and root
      document.body.style.backgroundImage = 'none';
      const root = document.getElementById('root');
      if (root) {
        root.style.backgroundImage = 'none';
      }
    };

    // Run immediately and repeatedly
    removeWatermarks();
    const interval = setInterval(removeWatermarks, 500);
    
    // Also run when DOM changes
    const observer = new MutationObserver(removeWatermarks);
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    // Stop after 10 seconds (should be enough)
    setTimeout(() => {
      clearInterval(interval);
      observer.disconnect();
    }, 10000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;