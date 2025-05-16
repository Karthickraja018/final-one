import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon, DownloadIcon, CodeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../App';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';

const HeroSection = () => {
  const { theme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  // Greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen w-full flex items-center pt-20 relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-purple-600 z-50" style={{ width: `${scrollProgress}%` }} />

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: theme === 'dark' ? '#0f172a' : '#ffffff',
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 4 },
            },
          },
          particles: {
            color: { value: '#a855f7' },
            links: { enable: true, color: '#a855f7', distance: 150 },
            move: { enable: true, speed: 1.5 },
            number: { value: 40 },
            opacity: { value: 0.5 },
            shape: { type: 'circle' },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="flex-1">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-2">
            <span className="text-purple-600 font-medium">{getGreeting()}, I'm</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>Karthick Raja</span>
            <span className="text-purple-600">{/*Role*/}</span>
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl font-medium mb-6 ${theme === 'dark' ? 'text-purple-600' : 'text-gray-600'}`}
          >
            <Typewriter
              words={[
                'Machine Learning Engineer',
                'Data Scientist',
                'Python Developer',
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`mb-8 max-w-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}
          >
              I'm a Machine Learning Engineer who loves turning complex problems into simple, scalable solutions. I work with Python, data pipelines, and ML models to automate and optimize workflows. Always learning. Always building.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link to="/#contact" onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-3 bg-purple-600 text-white rounded-md font-medium hover:bg-purple-700 transition-colors">
                Get in Touch
              </motion.button>
            </Link>
            <Link to="/#projects" onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-8 py-3 rounded-md font-medium border-2 border-purple-600 ${theme === 'dark' ? 'text-white' : 'text-purple-600'} hover:bg-purple-600 hover:text-white transition-colors`}>
                View Projects
              </motion.button>
            </Link>
            <a
              href="/resume/KARTHICK.pdf"
              download
              className="px-8 py-3 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-md font-medium transition-colors flex items-center"
            >
              <DownloadIcon className="w-4 h-4 mr-2" /> Resume
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1 }} className="flex space-x-4 mt-8">
            {[
              { Icon: GithubIcon, url: 'https://github.com/Karthickraja018' },
              { Icon: LinkedinIcon, url: 'https://www.linkedin.com/in/karthick-raja-e-2004-aiml/' },
              { Icon: CodeIcon, url: 'https://leetcode.com/u/karthick004/' }
            ].map(({ Icon, url }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
          
          {/* Floating Badge */}
          <div className="absolute top-6 left-6 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded shadow animate-pulse">
            Open to Work
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 mt-12 md:mt-0 flex justify-center"
        >
          <Tilt glareEnable={true} glareMaxOpacity={0.3} scale={1.05} className="relative" tiltMaxAngleX={20} tiltMaxAngleY={10}  transitionSpeed={1500} gyroscope={true}>
            <div className={`absolute inset-0 rounded-full ${theme === 'dark' ? 'bg-purple-700' : 'bg-purple-200'} blur-3xl opacity-20`} />
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-purple-600 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&fit=crop&w=1170&q=80"
                alt="Developer Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 bg-purple-600 text-white p-3 rounded-full shadow-lg"
            >
              <code className="text-xs font-bold">{'<coder/>'}</code>
            </motion.div>
          </Tilt>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link to="/#about">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer"
          >
            <span className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Scroll Down
            </span>
            <ArrowDownIcon className="w-5 h-5 text-purple-600" />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;
