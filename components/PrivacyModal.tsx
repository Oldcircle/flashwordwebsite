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
            生效日期：2023年10月1日<br/>
            感谢您使用闪电单词。为了提供更好的跨设备体验和维持服务运营，我们需要告知您关于个人信息处理及广告服务的相关事宜。
          </p>

          <section className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-black mb-4 text-duo-blue">
              <Database className="w-5 h-5" />
              1. 数据存储与云端同步
            </h3>
            <div className="bg-duo-blue-light/30 p-4 rounded-2xl border-2 border-duo-blue-light">
              <p className="font-bold text-gray-600 text-sm">
                <span className="text-duo-blue">核心服务：</span> 您的学习数据将安全存储于云端。
              </p>
            </div>
            <ul className="mt-4 space-y-2 text-gray-500 font-bold text-sm list-disc pl-5">
              <li>为了实现多设备间无缝切换，您的学习进度、闪卡掌握情况及自定义单词书数据将被加密上传至我们的云端服务器。</li>
              <li>无论您更换手机还是重新安装应用，登录账号后即可找回所有学习记录，再也不用担心数据丢失。</li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-black mb-4 text-duo-green">
              <Smartphone className="w-5 h-5" />
              2. 权限使用说明
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="min-w-[4px] bg-duo-green rounded-full"></div>
                <div>
                  <strong className="block text-gray-700">网络权限 (Internet)</strong>
                  <span className="text-sm text-gray-500 font-bold">用于账号登录、数据同步、词库更新以及加载必要的广告资源。</span>
                </div>
              </li>
              <li className="flex gap-3">
                <div className="min-w-[4px] bg-duo-green rounded-full"></div>
                <div>
                  <strong className="block text-gray-700">存储权限 (Storage)</strong>
                  <span className="text-sm text-gray-500 font-bold">用于缓存离线词库及音频，确保在网络不佳时也能流畅学习。</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="flex items-center gap-2 text-xl font-black mb-4 text-duo-yellow">
              <Globe className="w-5 h-5" />
              3. 广告服务与第三方
            </h3>
            <p className="text-gray-500 font-bold text-sm mb-2">
              <span className="text-duo-text underline decoration-4 decoration-duo-yellow/30">关于广告：</span>
            </p>
            <p className="text-gray-500 font-bold text-sm">
              为了向用户提供免费且高质量的服务，本应用内接入了第三方商业广告SDK（如 AdMob）。广告是我们维持服务器开销和持续开发的主要收入来源。我们会严格筛选广告源，尽力确保广告内容适宜且不干扰您的核心学习体验。
            </p>
          </section>

          <section>
            <h3 className="text-xl font-black mb-4 text-duo-text">4. 联系开发者</h3>
            <p className="text-gray-500 font-bold text-sm">
              如果您对本隐私政策有任何疑问，或需要注销账号/删除云端数据，请通过以下方式联系：
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