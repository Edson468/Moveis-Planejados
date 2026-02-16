import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Por que escolher a MadeiraPura?</h2>
            <div className="space-y-6">
              {[
                "Materiais de primeira linha (MDF, Ferragens Blum/Hettich)",
                "Perfis de alumínio com certificação de qualidade",
                "Acabamento impecável e atenção aos detalhes",
                "Cumprimento rigoroso dos prazos de entrega",
                "Garantia estendida para sua tranquilidade"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="text-amber-500 flex-shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-amber-600/20 rounded-2xl blur-lg"></div>
            <img 
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" 
              alt="Detalhe de móvel" 
              className="relative rounded-2xl shadow-2xl border border-gray-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}