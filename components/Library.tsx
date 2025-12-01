import React from 'react';

const categories = [
  { name: "高中英语", emoji: "🏫" },
  { name: "高考核心", emoji: "🔥" },
  { name: "大学四级", emoji: "🎓" },
  { name: "大学六级", emoji: "📜" },
  { name: "考研英语", emoji: "📚" },
  { name: "雅思核心", emoji: "✈️" },
  { name: "托福高频", emoji: "🇺🇸" },
  { name: "GRE", emoji: "🧠" },
  { name: "BEC商务", emoji: "💼" },
  { name: "计算机英语", emoji: "💻" },
  { name: "医学英语", emoji: "🏥" },
  { name: "日常口语", emoji: "🗣️" }
];

export const Library: React.FC = () => {
  return (
    <section id="library" className="py-24 bg-white">
      <div className="container mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-duo-text mb-6">覆盖全阶段词库</h2>
        <p className="text-xl text-gray-400 font-bold mb-12">从校园到职场，你需要的一个都不少。</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="group cursor-default">
              <div className="h-full bg-white border-2 border-gray-200 border-b-[6px] rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transition-all hover:border-duo-blue hover:translate-y-[-2px] hover:shadow-lg active:border-b-2 active:translate-y-[2px]">
                <div className="text-3xl mb-1 group-hover:scale-110 transition-transform duration-200">{cat.emoji}</div>
                <div className="font-black text-gray-600 group-hover:text-duo-blue text-lg">{cat.name}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 bg-gray-50 rounded-2xl text-gray-400 font-bold border-2 border-dashed border-gray-200">
          <span>📅 每周持续更新中...</span>
        </div>
      </div>
    </section>
  );
};