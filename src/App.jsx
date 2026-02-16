import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Process from './sections/Process';
import Aluminio from './sections/Aluminio';
import Gallery from './sections/Gallery';
import Diferenciais from './sections/Diferenciais';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Aluminio />
        <Gallery />
        <Diferenciais />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;