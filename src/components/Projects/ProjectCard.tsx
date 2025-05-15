import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon, GithubIcon, InfoIcon } from 'lucide-react';
import { useTheme } from '../../App';
interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    link: string;
    github: string;
  };
  index: number;
}
const ProjectCard = ({
  project,
  index
}: ProjectProps) => {
  const {
    theme
  } = useTheme();
  const [showDetails, setShowDetails] = useState(false);
  return <motion.div layout initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} className={`rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
      <div className="relative overflow-hidden group">
        <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-4 w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-white font-bold">{project.title}</h3>
              <motion.button whileHover={{
              scale: 1.1
            }} whileTap={{
              scale: 0.9
            }} onClick={() => setShowDetails(true)} className="p-2 bg-purple-600 text-white rounded-full">
                <InfoIcon className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h3>
        <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, i) => <span key={i} className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>
              {tag}
            </span>)}
        </div>
        <div className="flex justify-between">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <GithubIcon className="w-4 h-4 mr-1" /> Code
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={`flex items-center text-sm ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
            <ExternalLinkIcon className="w-4 h-4 mr-1" /> Live Demo
          </a>
        </div>
      </div>
      {showDetails && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50" onClick={() => setShowDetails(false)}>
          <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.9,
        opacity: 0
      }} className={`max-w-lg w-full rounded-lg p-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {project.title}
              </h3>
              <button onClick={() => setShowDetails(false)} className="text-gray-500 hover:text-gray-700">
                ✕
              </button>
            </div>
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, i) => <span key={i} className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-purple-400' : 'bg-purple-100 text-purple-700'}`}>
                  {tag}
                </span>)}
            </div>
            <div className="flex space-x-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-purple-600 text-white rounded-md flex items-center">
                <GithubIcon className="w-4 h-4 mr-2" /> View Code
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`px-4 py-2 rounded-md flex items-center ${theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'}`}>
                <ExternalLinkIcon className="w-4 h-4 mr-2" /> Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>}
    </motion.div>;
};
export default ProjectCard;