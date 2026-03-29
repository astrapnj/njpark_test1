import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, TrendingUp, Globe, Activity } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
  return (
    <header className="relative py-24 px-6 overflow-hidden border-b border-gray-800 bg-gray-950">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#10b981 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
            <ShieldAlert className="text-emerald-400" size={24} />
          </div>
          <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-[0.2em]">
            Strategic Economic Analysis Report
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black text-gray-100 mb-6 leading-none tracking-tighter"
        >
          2026 이란전쟁 발발 이후
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
          className="h-32 w-full max-w-4xl bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 mb-16 origin-left shadow-[0_0_50px_-12px_rgba(16,185,129,0.3)]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl"
        >
          <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-900/50 border border-gray-800">
            <Globe className="text-blue-400 shrink-0 mt-1" size={20} />
            <div>
              <h4 className="text-sm font-bold text-gray-200 mb-1">글로벌 지정학적 위기</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                중동 지역의 군사적 충돌로 인한 글로벌 공급망 재편 및 에너지 안보 위기 심화.
              </p>
            </div>
          </div>
          
          <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-900/50 border border-gray-800">
            <Activity className="text-emerald-400 shrink-0 mt-1" size={20} />
            <div>
              <h4 className="text-sm font-bold text-gray-200 mb-1">국내 증시 변동성 확대</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                방산, 에너지 등 수혜 업종과 해운, IT 등 타격 업종 간의 극심한 양극화 현상.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start p-4 rounded-xl bg-gray-900/50 border border-gray-800">
            <TrendingUp className="text-amber-400 shrink-0 mt-1" size={20} />
            <div>
              <h4 className="text-sm font-bold text-gray-200 mb-1">K-방산의 전략적 부상</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                글로벌 안보 수요 증가에 따른 대한민국 방위산업의 새로운 성장 동력 확보.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient glow */}
      <div className="absolute -right-1/4 -top-1/4 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
    </header>
  );
};
