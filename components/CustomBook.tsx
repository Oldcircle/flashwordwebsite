import React from 'react';
import { FileText, ArrowRight, BookOpen, Plus } from 'lucide-react';
import { Button } from './Button';

export const CustomBook: React.FC = () => {
  return (
    <section id="custom" className="py-24 bg-duo-text relative overflow-hidden">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-duo-yellow text-duo-yellow-dark bg-opacity-20 font-black rounded-full text-sm uppercase tracking-wider mb-6 border-2 border-duo-yellow/20">
              黑科技功能
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              把任何文本<br/>
              <span className="text-duo-blue">变成你的单词书</span>
            </h2>
            <p className="text-lg md:text-xl font-bold text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              看到一篇喜欢的英文文章？复制进来，闪电单词自动提取生词，生成专属卡片。针对性攻克阅读难关。
            </p>
            <Button variant="secondary" size="lg" className="shadow-lg shadow-duo-blue/20">
              <Plus className="w-5 h-5" />
              试一试导入文本
            </Button>
          </div>

          <div className="flex-1 w-full max-w-lg">
            {/* Transformation Visual */}
            <div className="flex flex-col gap-4">
               
               {/* Step 1: Text Input */}
               <div className="bg-white rounded-2xl p-4 border-l-8 border-duo-gray transform translate-x-4 opacity-80 scale-95">
                  <div className="flex items-center gap-2 mb-2 text-gray-400">
                    <FileText className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase">Source Text</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
               </div>

               {/* Arrow */}
               <div className="flex justify-center -my-2 relative z-20">
                 <div className="bg-duo-blue rounded-full p-2 border-4 border-duo-text">
                   <ArrowRight className="text-white w-6 h-6 animate-pulse" />
                 </div>
               </div>

               {/* Step 2: Flashcards Result */}
               <div className="bg-duo-blue rounded-3xl p-6 border-b-8 border-duo-blue-dark shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <BookOpen className="text-white w-6 h-6" />
                      </div>
                      <div>
                         <div className="text-white font-black text-lg">My Article Vocab</div>
                         <div className="text-blue-100 text-xs font-bold">24 Words Generated</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                     <div className="bg-white rounded-xl p-3 border-b-4 border-gray-200 text-center">
                        <div className="font-bold text-duo-text text-sm">Artificial</div>
                     </div>
                     <div className="bg-white rounded-xl p-3 border-b-4 border-gray-200 text-center">
                        <div className="font-bold text-duo-text text-sm">Intelligence</div>
                     </div>
                     <div className="bg-white rounded-xl p-3 border-b-4 border-gray-200 text-center">
                        <div className="font-bold text-duo-text text-sm">Demonstrated</div>
                     </div>
                     <div className="bg-duo-green text-white rounded-xl p-3 border-b-4 border-duo-green-dark text-center font-bold text-sm flex items-center justify-center">
                        Start Learning
                     </div>
                  </div>
               </div>

            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};