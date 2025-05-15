import React from 'react';
import { SunIcon, MoonIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';
const ThemeToggle = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <motion.button whileTap={{
    scale: 0.95
  }} whileHover={{
    scale: 1.05
  }} onClick={toggleTheme} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
      {theme === 'dark' ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </motion.button>;
};
export default ThemeToggle;