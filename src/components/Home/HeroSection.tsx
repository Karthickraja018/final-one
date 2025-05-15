import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../App';
const HeroSection = () => {
  const {
    theme
  } = useTheme();
  return <section id="home" className="min-h-screen w-full flex items-center pt-20">
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center">
        <div className="flex-1">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="mb-6">
            <span className="text-purple-600 font-medium">Hello, I'm</span>
          </motion.div>
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-4xl md:text-6xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              Karthick{' '}
            </span>
            <span className="text-purple-600">Developer</span>
          </motion.h1>
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className={`text-xl md:text-2xl font-medium mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Full Stack Developer & UI/UX Enthusiast
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }} className={`mb-8 max-w-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I create beautiful, functional, and responsive web applications with
            modern technologies. Let's build something amazing together!
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.8
        }} className="flex flex-wrap gap-4">
            <Link to="/#contact" onClick={e => {
            e.preventDefault();
            document.querySelector('#contact')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className="px-8 py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition-colors">
                Get in Touch
              </motion.button>
            </Link>
            <Link to="/#projects" onClick={e => {
            e.preventDefault();
            document.querySelector('#projects')?.scrollIntoView({
              behavior: 'smooth'
            });
          }}>
              <motion.button whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} className={`px-8 py-3 rounded-md font-medium border-2 border-purple-600 ${theme === 'dark' ? 'text-white' : 'text-purple-600'} hover:bg-purple-600 hover:text-white transition-colors`}>
                View Projects
              </motion.button>
            </Link>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 1
        }} className="flex space-x-4 mt-8">
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -3
          }} className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
              <GithubIcon className="w-6 h-6" />
            </motion.a>
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -3
          }} className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </motion.a>
            <motion.a href="#" target="_blank" rel="noopener noreferrer" whileHover={{
            scale: 1.1,
            y: -3
          }} className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors">
              <TwitterIcon className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0,
        scale: 0.9
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="flex-1 mt-12 md:mt-0 flex justify-center">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-purple-700' : 'bg-purple-200'} blur-3xl opacity-20`}></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-purple-600 shadow-xl">
              <img src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Developer Portrait" className="w-full h-full object-cover" />
            </div>
            <motion.div animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }} transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }} className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg">
              <code className="text-xs font-bold">{'<coder/>'}</code>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5,
      duration: 1
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link to="/#about" smooth>
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }} className="flex flex-col items-center cursor-pointer">
            <span className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Scroll Down
            </span>
            <ArrowDownIcon className="w-5 h-5 text-purple-600" />
          </motion.div>
        </Link>
      </motion.div>
    </section>;
};
export default HeroSection;