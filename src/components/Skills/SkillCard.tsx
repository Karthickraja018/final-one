import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../App';
interface SkillProps {
  skill: {
    name: string;
    level: number;
    icon: string;
  };
  index: number;
}
const SkillCard = ({
  skill,
  index
}: SkillProps) => {
  const {
    theme
  } = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  return <motion.div initial={{
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
  }} whileHover={{
    scale: 1.03,
    y: -5
  }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} shadow-md transition-all duration-300`}>
      <div className="flex items-center mb-4">
        <div className="text-2xl mr-3">{skill.icon}</div>
        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {skill.name}
        </h3>
      </div>
      <div className="relative h-4 w-full bg-gray-300 rounded-full overflow-hidden mb-2">
        <motion.div initial={{
        width: 0
      }} animate={{
        width: isHovered ? `${skill.level}%` : `${skill.level - 10}%`
      }} transition={{
        duration: 1,
        ease: 'easeOut'
      }} className="absolute top-0 left-0 h-full bg-purple-600 rounded-full" />
      </div>
      <div className="flex justify-between text-sm">
        <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
          Proficiency
        </span>
        <span className="font-medium text-purple-600">{skill.level}%</span>
      </div>
    </motion.div>;
};
export default SkillCard;