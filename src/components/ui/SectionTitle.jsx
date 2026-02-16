import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ children, subtitle }) {
  return (
    <div className="text-center mb-12">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
      >
        {children}
      </motion.h2>
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: '60px' }}
        viewport={{ once: true }}
        className="h-1 bg-amber-600 mx-auto mb-4"
      />
      <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
    </div>
  );
}