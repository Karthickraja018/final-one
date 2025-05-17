import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CodeIcon, BrainIcon, GlobeIcon, ZapIcon } from 'lucide-react';
import { useTheme } from '../../App';

const AboutSection = () => {
  const { theme } = useTheme();
  console.log('AboutSection rendered, theme:', theme);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 });

  const highlights = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Tools Mastered', value: '15+' },
    { label: 'Internships Done', value: '1' },
    { label: 'Top Dept. Rank', value: '1st Place' },
  ];

  const interests = ['LangChain', 'Vector DBs', 'D3.js', 'Model Deployment'];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 w-full"
      style={{ minHeight: '300px', position: 'relative', zIndex: 10 }}
      aria-label="About Section"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>About </span>
            <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p
            className={`max-w-2xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Machine Learning enthusiast turning data into decisions and problems into products.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="relative">
              <div
                className={`absolute inset-0 rounded-lg ${
                  theme === 'dark' ? 'bg-primary/20' : 'bg-primary/10'
                } blur-2xl opacity-20 -z-10`}
              />
              <div className="relative overflow-hidden rounded-lg border-2 border-primary shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1172&q=80"
                  alt="Developer at work"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h3
              className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              My Journey So Far
            </h3>
            <p
              className={`mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              I’m Karthick Raja — a Machine Learning engineer in the making, with a passion for turning real-world problems into data-driven solutions. My journey began with curiosity and code in college, and quickly evolved into building AI tools, gesture-based apps, and farmland alert systems.
            </p>
            <p
              className={`mb-6 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              With hands-on internship experience, a growing portfolio of ML projects, and certifications from NPTEL, Infosys, and Skillible, I’m actively shaping my future in AI. Whether it’s streamlining data with Python, visualizing insights with Streamlit, or automating tasks with FastAPI — I build with purpose.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 rounded-lg text-center shadow-md border border-primary"
                >
                  <h4 className="text-xl font-bold text-primary">
                    {item.value}
                  </h4>
                  <p
                    className={`text-sm ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <h4
              className={`text-lg font-semibold mb-2 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Currently Exploring
            </h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((tech, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-sm text-primary dark:text-primary rounded-full"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;