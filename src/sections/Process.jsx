import React from 'react';
import { Ruler, ClipboardList, Hammer } from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import StepCard from '../components/ui/StepCard';

export default function Process() {
  return (
    <section id="processo" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle subtitle="Nosso processo é simples, transparente e focado na sua satisfação.">
          Do Sonho à Realidade
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          <StepCard 
            index={0}
            icon={Ruler}
            title="1. Visita Técnica"
            description="Nossa equipe vai até sua casa para analisar o ambiente, ouvir suas ideias e retirar as medidas exatas."
          />
          <StepCard 
            index={1}
            icon={ClipboardList}
            title="2. Projeto & Orçamento"
            description="Criamos um projeto 3D exclusivo para você e apresentamos um orçamento detalhado sem surpresas."
          />
          <StepCard 
            index={2}
            icon={Hammer}
            title="3. Produção & Instalação"
            description="Fabricamos seus móveis com materiais de alta qualidade e realizamos a instalação profissional."
          />
        </div>
      </div>
    </section>
  );
}