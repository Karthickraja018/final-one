import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';
const Footer = () => {
  const {
    theme
  } = useTheme();
  const currentYear = new Date().getFullYear();
  return <footer className={`w-full pt-12 pb-6 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center text-2xl font-bold" onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>
              <span className="text-purple-600">&lt;</span>
              <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Dev
              </span>
              <span className="text-purple-600">Portfolio</span>
              <span className="text-purple-600">/&gt;</span>
            </Link>
            <p className={`mt-2 max-w-md ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Creating beautiful digital experiences with clean code and modern
              design.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -3
            }} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} text-purple-600 transition-colors`}>
                <GithubIcon className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -3
            }} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} text-purple-600 transition-colors`}>
                <LinkedinIcon className="w-5 h-5" />
              </motion.a>
              <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
              scale: 1.1,
              y: -3
            }} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} text-purple-600 transition-colors`}>
                <TwitterIcon className="w-5 h-5" />
              </motion.a>
            </div>
            <Link to="/" onClick={e => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`flex items-center px-4 py-2 rounded-md ${theme === 'dark' ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'} transition-colors`}>
                <ArrowUpIcon className="w-4 h-4 mr-2" /> Back to Top
              </motion.button>
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              © {currentYear} John Developer. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Privacy Policy
              </Link>
              <Link to="/terms" className={`text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;