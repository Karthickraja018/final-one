import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';
import ProjectCard from './ProjectCard';
const ProjectsSection = () => {
  const {
    theme
  } = useTheme();
  const [filter, setFilter] = useState('all');
  const filters = [{
    id: 'all',
    label: 'All Projects'
  }, {
    id: 'web',
    label: 'Web Apps'
  }, {
    id: 'mobile',
    label: 'Mobile Apps'
  }, {
    id: 'design',
    label: 'UI/UX Design'
  }];
  const projects = [{
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with payment integration, user authentication, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    category: 'web',
    link: '#',
    github: '#'
  }, {
    id: 2,
    title: 'Task Management App',
    description: 'A mobile app for managing tasks, setting reminders, and tracking productivity.',
    image: 'https://images.unsplash.com/photo-1611224885990-2ae668be0646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1039&q=80',
    tags: ['React Native', 'Firebase', 'Redux'],
    category: 'mobile',
    link: '#',
    github: '#'
  }, {
    id: 3,
    title: 'Finance Dashboard',
    description: 'A dashboard for tracking personal finances, investments, and spending habits.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    category: 'web',
    link: '#',
    github: '#'
  }, {
    id: 4,
    title: 'Healthcare Portal UI',
    description: 'A modern UI design for a healthcare portal focused on patient experience.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    tags: ['Figma', 'Adobe XD', 'UI/UX'],
    category: 'design',
    link: '#',
    github: '#'
  }, {
    id: 5,
    title: 'Social Media Dashboard',
    description: 'A dashboard for managing multiple social media accounts and analyzing engagement.',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    tags: ['React', 'GraphQL', 'Tailwind CSS'],
    category: 'web',
    link: '#',
    github: '#'
  }, {
    id: 6,
    title: 'Fitness Tracker App',
    description: 'A mobile app for tracking workouts, nutrition, and fitness goals.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    tags: ['React Native', 'TypeScript', 'Firebase'],
    category: 'mobile',
    link: '#',
    github: '#'
  }];
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);
  return <section id="projects" className="py-20 w-full">
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
            <span className="text-purple-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Check out some of my recent work and personal projects.
          </p>
        </motion.div>
        <div className="flex justify-center mb-12">
          <div className={`inline-flex flex-wrap justify-center gap-2 p-1 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
            {filters.map(item => <motion.button key={item.id} whileHover={{
            scale: 1.03
          }} whileTap={{
            scale: 0.97
          }} onClick={() => setFilter(item.id)} className={`px-4 py-2 rounded-md font-medium transition-all ${filter === item.id ? 'bg-purple-600 text-white shadow-md' : `${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}`}>
                {item.label}
              </motion.button>)}
          </div>
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </motion.div>
      </div>
    </section>;
};
export default ProjectsSection;