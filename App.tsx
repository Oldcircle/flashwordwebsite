import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CustomBook } from './components/CustomBook';
import { Library } from './components/Library';
import { Footer } from './components/Footer';
import { PrivacyModal } from './components/PrivacyModal';

function App() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-duo-green selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <CustomBook />
        <Library />
      </main>
      <Footer onOpenPrivacy={() => setIsPrivacyOpen(true)} />
      
      <PrivacyModal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)} 
      />
    </div>
  );
}

export default App;