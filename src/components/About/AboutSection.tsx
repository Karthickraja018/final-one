import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon, BrainIcon, GlobeIcon, ZapIcon } from 'lucide-react';
import { useTheme } from '../../App';
const AboutSection = () => {
  const {
    theme
  } = useTheme();
  const features = [{
    icon: <CodeIcon className="w-6 h-6" />,
    title: 'Clean Code',
    description: 'I write clean, maintainable, and efficient code following best practices and design patterns.'
  }, {
    icon: <BrainIcon className="w-6 h-6" />,
    title: 'Problem Solver',
    description: 'I love tackling complex problems and finding elegant solutions through critical thinking.'
  }, {
    icon: <GlobeIcon className="w-6 h-6" />,
    title: 'Responsive Design',
    description: 'Creating applications that work flawlessly across all devices and screen sizes.'
  }, {
    icon: <ZapIcon className="w-6 h-6" />,
    title: 'Performance Focused',
    description: 'Optimizing applications for speed and efficiency to provide the best user experience.'
  }];
  return <section id="about" className="py-20 w-full">
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
              About{' '}
            </span>
            <span className="text-purple-600">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm a passionate developer with a focus on creating beautiful and
            functional web applications.
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="flex-1">
            <div className="relative">
              <div className={`absolute inset-0 rounded-lg ${theme === 'dark' ? 'bg-purple-700' : 'bg-purple-200'} blur-2xl opacity-20 -z-10`}></div>
              <div className="relative overflow-hidden rounded-lg border-2 border-purple-600 shadow-xl">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80" alt="Developer at work" className="w-full h-auto" />
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="flex-1">
            <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Who I Am
            </h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm John Developer, a full-stack developer with over 5 years of
              experience in building web applications. I specialize in React,
              Node.js, and modern JavaScript frameworks to create responsive and
              user-friendly interfaces.
            </p>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              My journey in programming began when I was in college, and since
              then, I've worked on various projects ranging from small business
              websites to complex enterprise applications. I'm passionate about
              clean code, user experience, and staying up-to-date with the
              latest technologies.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => <motion.div key={index} initial={{
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
            }} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'} hover:shadow-md transition-all duration-300`}>
                  <div className="text-purple-600 mb-3">{feature.icon}</div>
                  <h4 className={`font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default AboutSection;