import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero onNavigate={setCurrentPage} />;
      case 'about':
        return <About />;
      case 'education':
        return <Education />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="font-sans antialiased text-dark bg-light selection:bg-accent selection:text-white min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-16">
        {renderPage()}
      </main>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Joy Poddar. All Rights Reserved.</p>
          <p className="text-sm mt-2 text-slate-600">Designed with precision and passion.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;