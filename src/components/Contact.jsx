import React from 'react';
import { CONTACT } from '../constants';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-10 text-center text-4xl'
      >
        Get in Touch
      </motion.h1>
      <div className='text-center tracking-tighter'>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className='my-4'
        >
          {CONTACT.email}
        </motion.p>

        {/* Animated Resume Link Button */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href='https://drive.google.com/file/d/1umwnsL2n9gCRgoK0_xyR2lJZdgUw5_oQ/view?usp=sharing'
          target='_blank'
          className='inline-block mt-8 px-8 py-4 bg-cyan-500 text-neutral-900 font-semibold rounded-full shadow-lg hover:bg-cyan-600 transition duration-300'
        >
          Download My Resume
        </motion.a>
      </div>
    </div>
  );
};

export default Contact;
