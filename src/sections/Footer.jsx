import React from 'react';
import { Instagram, MessageCircle, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded flex items-center justify-center text-white font-bold">M</div>
              <span className="font-bold text-xl text-gray-900 dark:text-white">Madeira<span className="text-amber-600">Pura</span></span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm">
              Especialistas em transformar ambientes através de móveis planejados e esquadrias em alumínio de alta qualidade.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li><a href="#" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Início</a></li>
              <li><a href="#processo" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Como Funciona</a></li>
              <li><a href="#aluminio" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Portas e Janelas</a></li>
              <li><a href="#galeria" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Projetos</a></li>
              <li><a href="#contato" className="hover:text-amber-600 dark:hover:text-amber-500 transition-colors">Orçamento</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-amber-500 hover:text-white hover:border-amber-500 transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} MadeiraPura Móveis e Esquadrias. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}