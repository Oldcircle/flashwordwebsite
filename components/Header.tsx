import React from 'react';
import { Zap } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToDownload = () => {
    // Scroll to the main hero section instead of just the button for better context
    const element = document.getElementById('hero-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b-2 border-duo-gray py-4">
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between">
        <div 
          className="flex items-center gap-2 group cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="bg-duo-blue p-2 rounded-xl border-b-4 border-duo-blue-dark group-hover:translate-y-[2px] group-hover:border-b-2 transition-all">
            <Zap className="w-6 h-6 text-white fill-current" />
          </div>
          <span className="text-2xl font-black text-duo-blue tracking-tight">闪电单词</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 font-extrabold text-gray-400 uppercase text-sm tracking-widest">
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="hover:text-duo-blue transition-colors hover:bg-duo-blue-light px-4 py-2 rounded-xl cursor-pointer"
          >
            特色
          </a>
          <a 
            href="#custom" 
            onClick={(e) => scrollToSection(e, 'custom')}
            className="hover:text-duo-blue transition-colors hover:bg-duo-blue-light px-4 py-2 rounded-xl cursor-pointer"
          >
            自定义
          </a>
          <a 
            href="#library" 
            onClick={(e) => scrollToSection(e, 'library')}
            className="hover:text-duo-blue transition-colors hover:bg-duo-blue-light px-4 py-2 rounded-xl cursor-pointer"
          >
            词库
          </a>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button size="sm" variant="primary" onClick={scrollToDownload}>
            下载安卓版
          </Button>
        </div>
      </div>
    </header>
  );
};