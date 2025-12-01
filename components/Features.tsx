import React from 'react';
import { Hand, Zap, Brain, Layers } from 'lucide-react';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  borderColor: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, color, borderColor }) => (
  <div className="flex flex-col items-start text-left p-8 rounded-[2rem] border-2 border-gray-100 hover:border-transparent hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all bg-white group">
    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-b-4 transition-transform group-hover:scale-110 duration-300`} style={{ backgroundColor: color, borderColor: borderColor }}>
      <div className="text-white">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-black text-duo-text mb-3">{title}</h3>
    <p className="text-gray-500 font-bold leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-duo-text mb-6">不仅是背单词，<br/>更是<span className="text-duo-green">大脑的健身房</span></h2>
          <p className="text-xl text-gray-400 font-bold">科学、高效、还有点好玩。</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureItem 
            icon={<Hand className="w-8 h-8" strokeWidth={3} />}
            title="Tinder式滑动"
            description="无需点击繁琐按钮。左滑遗忘，右滑掌握。极佳的手感让背单词充满节奏感。"
            color="#58cc02" // Green
            borderColor="#46a302"
          />
          <FeatureItem 
            icon={<Zap className="w-8 h-8" strokeWidth={3} />}
            title="30秒极速挑战"
            description="专为排队、等车设计。启动快，交互快，随时随地利用碎片时间刷两组。"
            color="#1cb0f6" // Blue
            borderColor="#1899d6"
          />
          <FeatureItem 
            icon={<Brain className="w-8 h-8" strokeWidth={3} />}
            title="艾宾浩斯记忆"
            description="后台算法自动安排复习计划。你只需要负责滑，剩下的交给我们。"
            color="#ffc800" // Yellow
            borderColor="#e5b400"
          />
          <FeatureItem 
            icon={<Layers className="w-8 h-8" strokeWidth={3} />}
            title="全场景覆盖"
            description="内置高中、四六级、雅思、托福、考研及各种专业英语词书。"
            color="#ff4b4b" // Red
            borderColor="#d33131"
          />
        </div>
      </div>
    </section>
  );
};