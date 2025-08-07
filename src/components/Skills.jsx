import React from 'react';
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGithub, FaGitAlt, FaDocker
} from 'react-icons/fa';
import {
  SiJavascript, SiTailwindcss, SiRedux, SiExpress, SiMongodb,
  SiMysql, SiPostman, SiVite
} from 'react-icons/si';
import { motion } from 'framer-motion';

const SkillCard = ({ name, Icon }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="group flex flex-col items-center justify-center p-5 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-lg shadow-green-500/10 hover:shadow-green-400/40 transition-all duration-300 hover:scale-105"
  >
    <div className="bg-black rounded-full p-4 border-2 border-green-500 group-hover:border-green-400 transition-all">
      <Icon className="text-4xl text-green-400 group-hover:text-green-300 transition-colors duration-300" />
    </div>
    <span className="mt-4 text-sm font-semibold text-white group-hover:text-green-300 transition-all">{name}</span>
  </motion.div>
);

const SkillSection = ({ title, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false }}
    className="mb-16"
  >
    <h2 className="text-3xl font-bold mb-6 text-green-400 border-b border-green-700 pb-2 tracking-wide">
      {title}
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
      {skills.map(({ name, icon }, index) => (
        <SkillCard key={index} name={name} Icon={icon} />
      ))}
    </div>
  </motion.div>
);

const Skills = () => {
  const frontend = [
    { name: 'React', icon: FaReact },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'HTML', icon: FaHtml5 },
    { name: 'CSS', icon: FaCss3Alt },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Redux', icon: SiRedux },
    { name: 'Vite', icon: SiVite },
  ];

  const backend = [
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
  ];

  const database = [
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
  ];

  const tools = [
    { name: 'Git', icon: FaGitAlt },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Docker', icon: FaDocker },
    { name: 'Postman', icon: SiPostman },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-black via-black-900 to-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="text-5xl font-extrabold text-center mb-16 text-green-400 tracking-wider"
        >
          💻 My Developer Toolkit
        </motion.h1>

        <SkillSection title="Frontend" skills={frontend} />
        <SkillSection title="Backend" skills={backend} />
        <SkillSection title="Database" skills={database} />
        <SkillSection title="Tools" skills={tools} />
      </div>
    </section>
  );
};

export default Skills;
