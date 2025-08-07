import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx'; // Optional: Install clsx for conditional classNames

const timelineData = [
  {
    title: 'Internship at @ProdigyInfoTech',
    duration: 'June 2024 - Aug 2024',
    description:
      'Worked on UI/UX design, responsive components, and integrated APIs using React and Tailwind CSS.',
    side: 'left',
  },
  {
    title: 'Internship at @AWS Cloud Foundation',
    duration: 'June 2025 - Aug 2025',
    description:
      'Worked on AWS services, cloud deployment, and automation. Gained hands-on experience with cloud infrastructure and DevOps practices.',
    side: 'right',
  },
];

const CareerHistory = () => {
  return (
    <section className="bg-black text-white min-h-screen py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-extrabold text-green-400 mb-20"
      >
         My Journey
      </motion.h2>

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Gradient Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-transparent z-0"></div>

        {/* Timeline Items */}
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={clsx(
              'mb-16 w-full flex relative z-10',
              item.side === 'left'
                ? 'justify-start pr-8 md:pr-24'
                : 'justify-end pl-8 md:pl-24'
            )}
          >
            {/* Card */}
            <div className="relative bg-[#0f0f0f] bg-opacity-80 backdrop-blur-sm border border-green-500/20 rounded-xl shadow-md p-6 max-w-md transition-all hover:shadow-green-500/30">
              {/* Dot */}
              <div
                className={clsx(
                  'absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-green-400 rounded-full border-4 border-black',
                  item.side === 'left' ? '-right-8' : '-left-8'
                )}
              ></div>

              <h3 className="text-green-400 font-semibold text-lg mb-1">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm italic mb-2">{item.duration}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CareerHistory;
