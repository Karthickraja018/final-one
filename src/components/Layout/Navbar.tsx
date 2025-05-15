import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    theme
  } = useTheme();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'About',
    path: '/#about'
  }, {
    name: 'Skills',
    path: '/#skills'
  }, {
    name: 'Projects',
    path: '/#projects'
  }, {
    name: 'Contact',
    path: '/#contact'
  }];
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? `${theme === 'dark' ? 'bg-gray-900/90 shadow-lg shadow-purple-500/10' : 'bg-white/90 shadow-lg'} backdrop-blur-md` : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="text-2xl font-bold">
          <Link to="/" className="flex items-center" onClick={e => {
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
        </motion.div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-8">
            {navLinks.map((link, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: -10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }}>
                <Link to={link.path} className={`relative font-medium transition-colors duration-300 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-purple-600'} after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-purple-600 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full`} onClick={e => {
              e.preventDefault();
              if (link.path === '/') {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              } else {
                const element = document.querySelector(link.path.replace('/#', ''));
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }
            }}>
                  {link.name}
                </Link>
              </motion.div>)}
          </div>
          <ThemeToggle />
        </div>
        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={toggleMenu} className="ml-4 focus:outline-none" aria-label="Toggle menu">
            {isOpen ? <XIcon className="w-6 h-6 text-purple-600" /> : <MenuIcon className="w-6 h-6 text-purple-600" />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && <motion.div initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} exit={{
      opacity: 0,
      y: -20
    }} transition={{
      duration: 0.3
    }} className={`md:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          <div className="container mx-auto px-6 py-4">
            {navLinks.map((link, index) => <Link key={index} to={link.path} className={`block py-3 font-medium ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-purple-600'}`} onClick={e => {
          e.preventDefault();
          setIsOpen(false);
          if (link.path === '/') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          } else {
            const element = document.querySelector(link.path.replace('/#', ''));
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth'
              });
            }
          }
        }}>
                {link.name}
              </Link>)}
          </div>
        </motion.div>}
    </header>;
};
export default Navbar;