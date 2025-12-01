import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CustomBook } from './components/CustomBook';
import { Library } from './components/Library';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-duo-green selection:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <CustomBook />
        <Library />
      </main>
      <Footer />
    </div>
  );
}

export default App;