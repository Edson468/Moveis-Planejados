import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden w-full">
      <div className="absolute inset-0 z-0 w-full h-full">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Interior Design" 
          className="w-full h-full object-cover"
          style={{ maxWidth: '100%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200 text-sm font-semibold mb-6">
              Móveis Planejados & Esquadrias em Alumínio
            </span>
            <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Transformamos sua casa em um <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">lar de sonhos.</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Especialistas em móveis projetados sob medida e esquadrias em alumínio de alta performance. Design, funcionalidade e durabilidade em um só lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="px-8 py-4 bg-amber-600 text-white rounded-full font-bold text-lg shadow-lg hover:bg-amber-700 transition-all text-center">
                Solicitar Orçamento Grátis
              </a>
              <a href="#aluminio" className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-full font-bold text-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-all text-center">
                Ver Esquadrias
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}