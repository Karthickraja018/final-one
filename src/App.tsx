import React, { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Home from './components/Home/HeroSection';
import About from './components/About/AboutSection';
import Skills from './components/Skills/SkillsSection';
import Projects from './components/Projects/ProjectsSection';
import Contact from './components/Contact/ContactSection';
import Footer from './components/Layout/Footer';
// Create theme context
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {}
});
export const useTheme = () => useContext(ThemeContext);
export function App() {
  // Initialize theme from localStorage or default to light
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  // Update localStorage and document class when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  return <ThemeContext.Provider value={{
    theme,
    toggleTheme
  }}>
      <div className={`min-h-screen w-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<>
                  <Home />
                  <About />
                  <Skills />
                  <Projects />
                  <Contact />
                </>} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </ThemeContext.Provider>;
}