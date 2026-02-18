import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle2, MessageCircle, Phone, Instagram } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState('idle');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contato" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 relative w-full overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 w-full">
          <div className="grid md:grid-cols-2">
            
            {/* Lado Esquerdo - Info */}
            <div className="bg-amber-600 p-10 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-amber-500 rounded-full opacity-50 blur-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Vamos conversar?</h3>
                <p className="text-amber-100 mb-8">Preencha o formulário e nossa equipe entrará em contato para agendar uma visita técnica sem compromisso.</p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Phone size={20} />
                    <span>(11) 99999-9999</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle size={20} />
                    <span>contato@madeirapura.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={20} />
                    <span>Seg - Sex: 09h às 18h</span>
                  </div>
                </div>

                {/* Redes Sociais */}
                <div>
                  <h4 className="font-semibold mb-4 text-amber-100">Siga-nos:</h4>
                  <div className="flex gap-4">
                    <a 
                      href="https://instagram.com/madeirapura" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-amber-600 transition-all duration-300 transform hover:scale-110"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href="https://wa.me/5511999999999" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-green-500 hover:border-green-500 transition-all duration-300 transform hover:scale-110"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle size={24} />
                    </a>
                    <a 
                      href="tel:+5511999999999" 
                      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 transform hover:scale-110"
                      aria-label="Telefone"
                    >
                      <Phone size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Lado Direito - Form */}
            <div className="p-10">
              {formStatus === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Solicitação Enviada!</h4>
                  <p className="text-gray-600 dark:text-gray-400">Em breve entraremos em contato para confirmar sua visita.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-6 text-amber-600 dark:text-amber-400 font-medium hover:underline">Enviar nova mensagem</button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nome Completo</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-gray-900 dark:text-white" placeholder="Seu nome" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Telefone / WhatsApp</label>
                    <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-gray-900 dark:text-white" placeholder="(00) 00000-0000" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tipo de Serviço</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-gray-900 dark:text-white">
                      <option>Móveis Planejados</option>
                      <option>Portas e Janelas em Alumínio</option>
                      <option>Ambiente Completo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Mensagem (Opcional)</label>
                    <textarea rows="3" className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-gray-900 dark:text-white" placeholder="Conte um pouco sobre o que você precisa..."></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'submitting'}
                    type="submit" 
                    className="w-full bg-gray-900 dark:bg-amber-600 text-white font-bold py-4 rounded-lg hover:bg-gray-800 dark:hover:bg-amber-700 transition-all transform active:scale-95 disabled:opacity-70"
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Agendar Visita Técnica'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}