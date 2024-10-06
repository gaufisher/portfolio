'use client';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaAws, FaGithub, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiGooglecloud, SiKubernetes, SiTailwindcss } from 'react-icons/si';


const skills = [
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Typescript', icon: SiTypescript },
  { name: 'GraphQL', icon: SiGraphql },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Google Cloud', icon: SiGooglecloud },
  { name: 'AWS', icon: FaAws },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Docker', icon: FaDocker },
  { name: 'Kubernetes', icon: SiKubernetes },
];
  
  const Skills = () => {
    return (
      <motion.div 
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      transition={{ duration: 1 }}
      viewport={{amount: .3, once: true}}
      id="skills" className="py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">My Skills</h2>
        <div className="flex space-x-6 overflow-x-scroll p-6">
        {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 shadow rounded-lg p-4 flex flex-col items-center justify-center transition transform hover:scale-105">
              <skill.icon className="text-5xl text-blue-500 mb-3" />
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </motion.div>
    );
  };
  
  export default Skills;
  