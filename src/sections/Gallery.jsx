import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';

export default function Gallery() {
  const images = [
    {
      src: "https://media.istockphoto.com/id/2211621570/pt/foto/carpenter-walking-through-a-workshop-full-of-window-frames.webp?a=1&b=1&s=612x612&w=0&k=20&c=UB7k-VnPvn4kSTyjx6HQPz-QqER1np7mwDKJDCAn0CU=",
      alt: "Workshop de Produção",
      title: "Produção"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1711412120015-2b9243910324?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGFzJTIwZSUyMGphbmVsYXMlMjBlbSUyMGFsdW1pbmlvfGVufDB8fDB8fHww",
      alt: "Portas e Janelas",
      title: "Esquadrias"
    },
    {
      src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
      alt: "Cozinha Planejada",
      title: "Cozinhas"
    },
    {
      src: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?q=80&w=800&auto=format&fit=crop",
      alt: "Quarto Planejado",
      title: "Quartos"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1706559879916-e40844098a80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA2fHxtZXNhcyUyMGUlMjBjYWRlaXJhcyUyMGRlJTIwamFudGFyJTIwcHJvamV0YWRhc3xlbnwwfHwwfHx8MA%3D%3D",
      alt: "Sala de Estar",
      title: "Salas"
    },
    {
      src: "https://images.unsplash.com/photo-1747227231361-abf257ab3619?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVzYXMlMjBlJTIwY2FkZWlyYXMlMjBkZSUyMGphbnRhciUyMHByb2pldGFkYXN8ZW58MHx8MHx8fDA%3D",
      alt: "Banheiro Projetado",
      title: "Banheiros"
    }
  ];

  return (
    <section id="galeria" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Confira alguns de nossos projetos recentes entregues com excelência.">
          Nossos Projetos
        </SectionTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-64 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
            >
              <img 
                src={image.src}
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium">{image.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}