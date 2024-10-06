'use client';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center h-screen text-center bg-gray-100"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Greg Fisher</h1>
      <p className="text-xl text-gray-700 mb-6">
        A frontend focused fullstack engineer and mentor passionate about helping businesses scale.
      </p>
      <a href="#projects" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
        View My Projects
      </a>
    </motion.div>
  );
};

export default Hero;
