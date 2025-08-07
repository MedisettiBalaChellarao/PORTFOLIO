import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from 'react-icons/fa';
import profilePic from '/IMG_3944.jpg'; // Use your actual image path

const AboutMe = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: false }}
      className="min-h-screen bg-black flex flex-col items-center justify-center px-4 py-16 text-white"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: false }}
        className="flex flex-col md:flex-row items-center gap-10 max-w-5xl"
      >
        {/* Profile Image */}
        <img
          src={profilePic}
          alt="Profile"
          className="object-cover rounded-xl w-80 h-90 "
        />

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            I'm <span className="text-green-400">M.BalaChellarao</span>, a Full Stack Developer
            <br />
            building creative and scalable web applications.
          </h1>

          <p className="text-gray-300 text-base sm:text-lg mb-4">
            I'm currently pursuing my B.Tech in Computer Science Engineering at Koneru Lakshmaiah University.
            I specialize in both frontend and backend development, transforming ideas into functional digital experiences using modern technologies.
          </p>

          <p className="text-gray-300 text-base sm:text-lg mb-6">
            I'm passionate about <span className="text-green-400 font-semibold">JavaScript, React, Node.js, MongoDB</span>, and creating smooth,
            responsive UIs with animations and performance in mind. I also love photography, tech, and new ideas.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 mb-6 text-xl">
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="www.linkedin.com/in/balu-medisetti-879a74316" className="hover:text-blue-500"><FaLinkedin /></a>
            <a href="mailto:balachellarao25@email.com" className="hover:text-red-500"><FaEnvelope /></a>
            <a href="https://github.com/MedisettiBalaChellarao" className="hover:text-gray-400"><FaGithub /></a>
          </div>

          {/* Download Button */}
          <a
            href="/M_B_CHELLARAO CV.pdf"
            download
            className="inline-block px-6 py-2 border border-green-400 text-green-400 rounded-full hover:bg-green-400 hover:text-black transition"
          >
            ⬇ Download
          </a>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
