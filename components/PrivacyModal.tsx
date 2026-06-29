import React from 'react';
import { X, Shield, Lock, Smartphone, Database, Globe } from 'lucide-react';
import { Button } from './Button';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-duo-text/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white w-full max-w-2xl max-h-[85vh] rounded-[2rem] border-4 border-gray-200 shadow-2xl flex flex-col overflow-hidden animate-float">
        
        {/* Header */}
        <div className="bg-gray-50 border-b-2 border-gray-100 p-6 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <div className="bg-duo-blue p-2 rounded-xl">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-black text-duo-text">隐私政策</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-xl transition-colors text-gray-400 hover:text-duo-text"
          >
            <X className="w-6 h-6" strokeWidth={3} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar text-duo-text leading-relaxed">
          <p className="font-bold text-gray-500 mb-6">
            生效日期：2026年6月29日（适用于 iOS 离线版）<br/>
            感谢你使用闪电单词。闪电单词是一款<strong className="text-duo-text">完全离线</strong>运行的单词学习应用，我们非常重视你的隐私。本政策说明我们如何（不）处理你的信息。
          </p>

          <section className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-black mb-4 text-duo-blue">
              <Database className="w-5 h-5" />
              1. 我们不收集任何个人信息
            </h3>
            <div className="bg-duo-blue-light/30 p-4 rounded-2xl border-2 border-duo-blue-light">
              <p className="font-bold text-gray-600 text-sm">
                <span className="text-duo-blue">核心承诺：</span> 闪电单词不收集、不上传、不存储任何可识别你个人身份的信息。
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-500 font-bold text-sm list-disc pl-5">
              <li>没有账号系统，无需注册或登录。</li>
              <li>没有服务器，应用不会向任何后端发送数据。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-black mb-4 text-duo-green">
              <Smartphone className="w-5 h-5" />
              2. 数据只存在你的设备上
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="min-w-[4px] bg-duo-green rounded-full"></div>
                <div>
                  <strong className="block text-gray-700">本地存储</strong>
                  <span className="text-sm text-gray-500 font-bold">你的学习进度、设置和导入的单词表全部保存在本机，不会离开你的设备。</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="min-w-[4px] bg-duo-green rounded-full"></div>
                <div>
                  <strong className="block text-gray-700">随时删除</strong>
                  <span className="text-sm text-gray-500 font-bold">在「设置 → 清除缓存」可清理缓存；卸载应用会一并删除全部数据。</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-black mb-4 text-duo-yellow">
              <Globe className="w-5 h-5" />
              3. 无广告 · 无第三方 SDK
            </h3>
            <p className="text-gray-500 font-bold text-sm">
              闪电单词<strong className="text-duo-text">不含任何广告</strong>，也<strong className="text-duo-text">不集成任何第三方分析、统计或追踪 SDK</strong>，不会与任何第三方共享你的数据。
            </p>
          </section>

          <section className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-black mb-4 text-duo-green">
              <Lock className="w-5 h-5" />
              4. 权限说明
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="min-w-[4px] bg-duo-green rounded-full"></div>
                <div>
                  <strong className="block text-gray-700">通知（可选）</strong>
                  <span className="text-sm text-gray-500 font-bold">仅当你主动开启「每日提醒」时才申请，用于在设定时间发送本地学习提醒，不走任何服务器，可随时在系统设置中关闭。</span>
                </div>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 text-duo-text">5. 联系我们</h3>
            <p className="text-gray-500 font-bold text-sm">
              如果你对本隐私政策有任何疑问，请通过以下方式联系：
              <br/><br/>
              邮箱：<a href="mailto:qsjzqdnr@gmail.com" className="text-duo-blue hover:underline">qsjzqdnr@gmail.com</a>
            </p>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t-2 border-gray-100 bg-white flex justify-end">
          <Button onClick={onClose} size="md" variant="primary">
            我已知晓
          </Button>
        </div>
      </div>
    </div>
  );
};