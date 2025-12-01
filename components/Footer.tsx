import React from 'react';
import { Zap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-duo-text text-white py-12 border-t-8 border-black/10">
      <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-duo-green p-1.5 rounded-lg">
              <Zap className="w-5 h-5 text-white fill-current" />
            </div>
            <span className="text-2xl font-black tracking-tight">闪电单词</span>
          </div>
          <p className="text-gray-400 font-bold text-sm">Android 平台最好用的滑动背单词 App。</p>
        </div>
        
        <div className="flex gap-8 font-bold text-gray-400 text-sm">
          <a href="#" className="hover:text-white transition-colors">关于我们</a>
          <a href="#" className="hover:text-white transition-colors">隐私政策</a>
          <a href="#" className="hover:text-white transition-colors">联系支持</a>
        </div>
        
        <div className="text-gray-500 text-xs font-bold">
          © {new Date().getFullYear()} Lightning Word. Designed for Learners.
        </div>
      </div>
    </footer>
  );
};