import React from 'react';
import { Smartphone, Download, Check, X, Zap } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero-section" className="relative overflow-hidden pt-12 pb-24 md:pt-24 md:pb-40 px-4 bg-duo-blue-light/30">
      
      {/* Background Decor */}
      <div className="absolute top-20 right-0 md:right-20 w-32 h-32 text-duo-yellow animate-float-delayed opacity-20 rotate-12">
        <Zap className="w-full h-full fill-current" />
      </div>
      <div className="absolute bottom-20 left-10 w-24 h-24 text-duo-green animate-float opacity-20 -rotate-12">
         <div className="w-full h-full rounded-full bg-current"></div>
      </div>

      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center gap-16 md:gap-8">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-block px-4 py-1.5 bg-duo-blue/10 text-duo-blue font-black rounded-full text-sm uppercase tracking-wider mb-6 border-2 border-duo-blue/20">
            沉浸体验 • 极速背词
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-duo-text mb-6 leading-[1.15]">
            背单词，<br />
            <span className="text-duo-blue">快如闪电。</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 font-bold mb-10 leading-relaxed max-w-lg mx-auto md:mx-0">
            左滑不会，右滑会。
            <br/>专为碎片时间设计，像刷短视频一样让人上瘾。
            <br/>不仅界面好看，更能让你停不下来。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" variant="primary" id="download" className="shadow-xl shadow-duo-green/20">
              <Download className="w-6 h-6" />
              下载安卓 APK
            </Button>
            <Button size="lg" variant="secondary" className="shadow-xl shadow-duo-blue/20" onClick={scrollToFeatures}>
              了解更多
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center md:justify-start gap-4 text-sm text-gray-400 font-bold">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-duo-green rounded-full"></span> 免费无广告
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-duo-blue rounded-full"></span> 离线可用
            </span>
          </div>
        </div>

        {/* Hero Image / Mockup */}
        <div className="flex-1 relative flex justify-center z-10 perspective-[1000px]">
           <div className="relative w-72 h-[550px] bg-white border-[8px] border-duo-text rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-float bg-[#f7f7f7]">
             
             {/* Notch & Status Bar */}
             <div className="absolute top-0 left-0 w-full h-8 z-20 flex justify-center pt-2">
                <div className="w-24 h-5 bg-duo-text rounded-b-xl"></div>
             </div>

             {/* App Header */}
             <div className="h-20 pt-8 px-6 flex justify-between items-center bg-white border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <div className="h-3 w-32 bg-gray-200 rounded-full"></div>
             </div>

             {/* Main App Area */}
             <div className="flex-1 relative p-4 flex items-center justify-center">
                
                {/* Background Card (Stack) */}
                <div className="absolute w-[85%] aspect-[3/4] bg-white rounded-3xl border-2 border-b-[6px] border-gray-200 transform scale-95 translate-y-4"></div>
                
                {/* Active Card - Swiping Right */}
                <div className="absolute w-[85%] aspect-[3/4] bg-white rounded-3xl border-2 border-b-[6px] border-gray-200 shadow-xl flex flex-col items-center justify-center text-center p-6 transform rotate-6 translate-x-8 transition-transform">
                  
                  {/* LIKE Stamp */}
                  <div className="absolute top-4 left-4 border-4 border-duo-green text-duo-green font-black text-xl px-2 py-1 rounded-lg transform -rotate-12 opacity-80">
                    MASTERED
                  </div>

                  <span className="text-gray-400 text-xs font-black uppercase tracking-widest mb-4 bg-gray-100 px-2 py-1 rounded-md">TOEFL Core</span>
                  <h3 className="text-4xl font-black text-duo-text mb-2">Ephemeral</h3>
                  <p className="text-gray-400 font-bold mb-6 text-sm">/əˈfem(ə)rəl/</p>
                  
                  <div className="w-full bg-duo-blue/10 p-3 rounded-xl">
                    <p className="text-duo-blue font-bold text-lg">转瞬即逝的</p>
                  </div>
                </div>

                {/* Hand/Thumb Suggestion (Optional, kept simple) */}
             </div>

             {/* Bottom Controls */}
             <div className="h-24 bg-white border-t border-gray-100 flex items-center justify-center gap-8 px-6 pb-4">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-b-4 border-duo-red/30 text-duo-red flex items-center justify-center shadow-sm">
                  <X strokeWidth={4} />
                </div>
                <div className="w-14 h-14 rounded-2xl bg-duo-green border-b-4 border-duo-green-dark text-white flex items-center justify-center shadow-lg transform translate-y-[-2px]">
                  <Check strokeWidth={4} />
                </div>
             </div>
           </div>

           {/* Decorative Elements */}
           <div className="absolute top-1/2 -right-4 bg-duo-blue text-white p-3 rounded-2xl font-bold text-sm shadow-lg animate-bounce-slow border-b-4 border-duo-blue-dark">
             右滑记住！
           </div>
           <div className="absolute bottom-1/3 -left-4 bg-duo-red text-white p-3 rounded-2xl font-bold text-sm shadow-lg animate-bounce-slow border-b-4 border-duo-red-dark delay-700">
             左滑重来
           </div>
        </div>
      </div>
    </section>
  );
};