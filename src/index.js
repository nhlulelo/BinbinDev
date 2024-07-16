import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navigation from './pages/Navigation/Navigation';
import HeroSection from './pages/HeroSection/HeroSection';
import AboutSection from './pages/AboutSection/AboutSection';
import SkillsSection from './pages/SkillsSection/SkillsSection';
import PortfolioSection from './pages/PortfolioSection/PortfolioSection';
import ContactSection from './pages/ContactSection/ContactSection';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navigation/>
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <PortfolioSection/>
    <ContactSection/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
