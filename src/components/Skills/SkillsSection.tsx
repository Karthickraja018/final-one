import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';
import SkillCard from './SkillCard';
import { SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGraphql, SiApollographql, SiGit, SiDocker, SiAmazon, SiJest, SiFigma, SiVscodium } from 'react-icons/si';

const SkillsSection = () => {
  const {
    theme
  } = useTheme();
  const [activeTab, setActiveTab] = useState('frontend');
  const tabs = [{
    id: 'frontend',
    label: 'Frontend'
  }, {
    id: 'backend',
    label: 'Backend'
  }, {
    id: 'tools',
    label: 'Tools & Others'
  }];
  const skills: Record<string, { name: string; level: number; icon: React.ReactNode }[]> = {
    frontend: [{
      name: 'React',
      level: 90,
      icon: <SiReact />
    }, {
      name: 'JavaScript',
      level: 85,
      icon: <SiJavascript />
    }, {
      name: 'TypeScript',
      level: 80,
      icon: <SiTypescript />
    }, {
      name: 'HTML & CSS',
      level: 90,
      icon: <><SiHtml5 /><SiCss3 style={{ marginLeft: 4 }} /></>
    }, {
      name: 'Tailwind CSS',
      level: 85,
      icon: <SiTailwindcss />
    }, {
      name: 'Next.js',
      level: 75,
      icon: <SiNextdotjs />
    }],
    backend: [{
      name: 'Node.js',
      level: 85,
      icon: <SiNodedotjs />
    }, {
      name: 'Express',
      level: 80,
      icon: <SiExpress />
    }, {
      name: 'MongoDB',
      level: 75,
      icon: <SiMongodb />
    }, {
      name: 'PostgreSQL',
      level: 70,
      icon: <SiPostgresql />
    }, {
      name: 'GraphQL',
      level: 65,
      icon: <SiGraphql />
    }, {
      name: 'REST API',
      level: 90,
      icon: <SiApollographql />
    }],
    tools: [{
      name: 'Git',
      level: 85,
      icon: <SiGit />
    }, {
      name: 'Docker',
      level: 70,
      icon: <SiDocker />
    }, {
      name: 'AWS',
      level: 65,
      icon: <SiAmazon />
    }, {
      name: 'Jest',
      level: 75,
      icon: <SiJest />
    }, {
      name: 'Figma',
      level: 70,
      icon: <SiFigma />
    }, {
      name: 'VS Code',
      level: 90,
      icon: <SiVscodium />
    }]
  };
  return <section id="skills" className={`py-20 w-full ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-6">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              My{' '}
            </span>
            <span className="text-purple-600">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Here are the technologies and tools I work with to bring ideas to
            life.
          </p>
        </motion.div>
        <div className="mb-12">
          <div className="flex justify-center mb-8">
            <div className={`inline-flex p-1 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
              {tabs.map(tab => <motion.button key={tab.id} whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.97
            }} onClick={() => setActiveTab(tab.id)} className={`px-5 py-2 rounded-md font-medium transition-all ${activeTab === tab.id ? 'bg-purple-600 text-white shadow-md' : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}`}>
                  {tab.label}
                </motion.button>)}
            </div>
          </div>
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} exit={{
          opacity: 0,
          y: -20
        }} transition={{
          duration: 0.5
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills[activeTab].map((skill, index) => <SkillCard key={index} skill={skill} index={index} />)}
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className={`p-8 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-lg`}>
          <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Learning Journey
          </h3>
          <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I believe in continuous learning and staying updated with the latest
            technologies. Currently, I'm exploring:
          </p>
          <ul className="space-y-2">
            {['WebAssembly', 'Rust for Web', 'AI Integration in Web Apps'].map((item, index) => <motion.li key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="flex items-center">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                    {item}
                  </span>
                </motion.li>)}
          </ul>
        </motion.div>
      </div>
    </section>;
};
export default SkillsSection;