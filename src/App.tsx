import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Comics from './components/Comics';
import './App.css';

const App: React.FC = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [showSidepanel, setShowSidepanel] = useState(false);

  const navigationItems = [
    { title: 'Quadrinhos', icon: '📚' },
    { title: 'Personagens', icon: '👤' },
    { title: 'Criadores', icon: '👥' },
    { title: 'Eventos', icon: '📅' },
    { title: 'Series', icon: '📖' },
    { title: 'Histórias', icon: '📚' }
  ];

  return (
    <Router>
      <div className="page-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="navbar-content">
            <button 
              className="navbar-button"
              onClick={() => setShowNavigation(true)}
            >
              ☰ Menu
            </button>
            <h1 className="navbar-title">Loja de HQ</h1>
            <button 
              className="navbar-button"
              onClick={() => setShowSidepanel(true)}
            >
              Favoritos
            </button>
          </div>
        </nav>

        {/* Navigation Drawer */}
        {showNavigation && (
          <div className="drawer-overlay" onClick={() => setShowNavigation(false)}>
            <div className="drawer" onClick={(e) => e.stopPropagation()}>
              <div className="drawer-header">
                <h2>Menu</h2>
                <button 
                  className="drawer-close"
                  onClick={() => setShowNavigation(false)}
                >
                  ✕
                </button>
              </div>
              <ul className="drawer-list">
                {navigationItems.map((item, index) => (
                  <li key={index} className="drawer-item">
                    <span className="drawer-icon">{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Side Panel */}
        {showSidepanel && (
          <div className="drawer-overlay" onClick={() => setShowSidepanel(false)}>
            <div className="drawer drawer-right" onClick={(e) => e.stopPropagation()}>
              <div className="drawer-header">
                <h2>Favoritos</h2>
                <button 
                  className="drawer-close"
                  onClick={() => setShowSidepanel(false)}
                >
                  ✕
                </button>
              </div>
              <ul className="drawer-list">
                <li className="drawer-item">
                  <span>Abbey Christansen</span>
                  <button className="drawer-action">💬</button>
                </li>
                <li className="drawer-item">
                  <span>Alex Nelson</span>
                  <button className="drawer-action">💬</button>
                </li>
                <li className="drawer-item">
                  <span>Mary Johnson</span>
                  <button className="drawer-action">💬</button>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Comics />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
