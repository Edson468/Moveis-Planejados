import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Wind, Droplets, Maximize } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

export default function Aluminio() {
  const benefits = [
    {
      icon: Shield,
      title: "Alta Durabilidade",
      description: "O alumínio não enferruja, não empena e resiste às intempéries por décadas."
    },
    {
      icon: Wind,
      title: "Isolamento Térmico",
      description: "Sistemas com ruptura de ponte térmica para maior eficiência energética."
    },
    {
      icon: Droplets,
      title: "Vedação Perfeita",
      description: "Proteção contra infiltrações de água e ruídos externos."
    },
    {
      icon: Maximize,
      title: "Design Moderno",
      description: "Perfis slim que permitem grandes vãos de vidro e mais iluminação natural."
    }
  ];

  return (
    <section id="aluminio" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionTitle subtitle="Soluções completas em esquadrias de alumínio para sua residência ou comércio.">
          Portas e Janelas em Alumínio
        </SectionTitle>

        {/* Imagem Principal - Workshop */}
        <div className="mb-16 w-full overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl w-full"
          >
            <img 
              src="https://media.istockphoto.com/id/2211621570/pt/foto/carpenter-walking-through-a-workshop-full-of-window-frames.webp?a=1&b=1&s=612x612&w=0&k=20&c=UB7k-VnPvn4kSTyjx6HQPz-QqER1np7mwDKJDCAn0CU=" 
              alt="Workshop de Janelas em Alumínio" 
              className="w-full h-full object-cover"
              style={{ maxWidth: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Esquadrias de Alta Performance</h3>
              <p className="text-gray-200">Linha completa: Correr, Maxim-ar, Basculante, Fixo e muito mais</p>
            </div>
          </motion.div>
        </div>

        {/* Benefícios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 rounded-full flex items-center justify-center mb-4 text-amber-600 dark:text-amber-400">
                <benefit.icon size={24} />
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tipos de Produtos */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {/* Card 1 - Portas e Janelas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full"
          >
            <img 
              src="https://plus.unsplash.com/premium_photo-1711412120015-2b9243910324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGFzJTIwZSUyMGphbmVsYXMlMjBlbSUyMGFsdW1pbmlvfGVufDB8fDB8fHww" 
              alt="Portas e Janelas em Alumínio" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ maxWidth: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h4 className="text-xl font-bold text-white mb-1">Portas e Janelas</h4>
              <p className="text-gray-300 text-sm">Sistemas de abrir, correr e maxim-ar com acabamento premium</p>
            </div>
          </motion.div>

          {/* Card 2 - Box para Banheiro */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative h-80 rounded-2xl overflow-hidden shadow-lg cursor-pointer w-full"
          >
            <img 
              src="https://media.istockphoto.com/id/1024173540/pt/foto/concept-of-modern-decoration-design-of-bathroom-for-luxury-hotel-residential.webp?a=1&b=1&s=612x612&w=0&k=20&c=BF9zESYCFMTBzh52Stwt1iMB-z-lehekOHY31JkyXBA=" 
              alt="Box para Banheiro" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ maxWidth: '100%' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h4 className="text-xl font-bold text-white mb-1">Box e Divisórias</h4>
              <p className="text-gray-300 text-sm">Vidros temperados com perfis em alumínio para banheiro e ambientes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}