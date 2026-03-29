import React from 'react';
import { motion } from 'motion/react';
import { DashboardHeader } from './components/DashboardHeader';
import { IndustryCard } from './components/IndustryCard';
import { Timeline } from './components/Timeline';
import { INDUSTRIES } from './data/mockData';
import { TrendingUp, TrendingDown, Info, Calendar } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-emerald-500/30">
      <DashboardHeader />

      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 space-y-32">
        {/* Visual Context Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-[16/9] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative group"
          >
            <img
              src="https://picsum.photos/seed/war-geopolitics/1200/675"
              alt="지정학적 위기 상황"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-[0.3em] mb-2 block">Visual Context 01</span>
              <h3 className="text-lg font-bold text-white">지정학적 위기 분석</h3>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="aspect-[16/9] rounded-2xl overflow-hidden border border-gray-800 shadow-2xl relative group"
          >
            <img
              src="https://picsum.photos/seed/economy-stock/1200/675"
              alt="경제적 영향 분석"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.3em] mb-2 block">Visual Context 02</span>
              <h3 className="text-lg font-bold text-white">시장 변동성 모니터링</h3>
            </div>
          </motion.div>
        </section>

        {/* Section 1: Industry Overview */}
        <section id="industries">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-px bg-emerald-500" />
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  Industry Analysis
                </span>
              </div>
              <h2 className="text-4xl font-black tracking-tight mb-4">
                주요 산업별 <span className="text-emerald-400">수익률 및 전망</span>
              </h2>
              <p className="text-gray-400 leading-relaxed">
                2026년 2월 이란 전쟁 발발 이후, 대한민국 주요 산업 섹터별 주가 변동 추이와 
                그에 따른 경제적 영향 분석 결과입니다.
              </p>
            </div>
            
            <div className="flex gap-4 p-2 bg-gray-900 rounded-xl border border-gray-800">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-sm font-bold">
                <TrendingUp size={16} />
                수혜 업종
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/10 text-rose-400 text-sm font-bold">
                <TrendingDown size={16} />
                타격 업종
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} data={industry} />
            ))}
          </div>
        </section>

        {/* Section 2: Timeline & Events */}
        <section id="timeline" className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-blue-500" />
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Chronological Events
              </span>
            </div>
            <h2 className="text-4xl font-black tracking-tight mb-8">
              전쟁 발발 이후 <br />
              <span className="text-blue-400">주요 사건 타임라인</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-12 max-w-lg">
              군사적 충돌의 시작부터 글로벌 경제에 미친 주요 변곡점들을 시간 순으로 정리하였습니다. 
              각 사건은 국내 증시의 변동성을 유발하는 직접적인 원인이 되었습니다.
            </p>
            
            <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-2xl flex gap-4 items-start">
              <Info size={24} className="text-blue-400 shrink-0" />
              <div>
                <h4 className="text-sm font-bold text-gray-200 mb-1">데이터 분석 기준</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  본 보고서의 데이터는 2026년 1월 1일부터 2026년 3월 25일까지의 
                  실시간 시장 지표를 기반으로 작성되었습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 bg-gray-900/30 border border-gray-800 rounded-3xl backdrop-blur-sm">
            <Timeline />
          </div>
        </section>

        {/* Section 3: Strategic Outlook */}
        <section id="outlook" className="relative p-12 md:p-24 rounded-[40px] bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border border-gray-800 overflow-hidden">
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              향후 전략적 <span className="text-emerald-400">경제 전망</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <span className="text-emerald-400 font-black">01</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">에너지 자립 가속화</h4>
                  <p className="text-gray-400 leading-relaxed">
                    중동 리스크의 상시화에 따라 원자력 및 신재생 에너지로의 전환이 국가적 생존 전략으로 부상할 것입니다.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                  <span className="text-blue-400 font-black">02</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">방산 수출의 질적 성장</h4>
                  <p className="text-gray-400 leading-relaxed">
                    단순 무기 수출을 넘어 유지보수(MRO) 및 기술 이전 등 고부가가치 서비스 중심의 생태계가 구축될 전망입니다.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 border border-amber-500/30">
                  <span className="text-amber-400 font-black">03</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">공급망 다변화 및 내재화</h4>
                  <p className="text-gray-400 leading-relaxed">
                    특정 지역 의존도를 낮추기 위한 핵심 소재 및 부품의 국내 생산 비중 확대가 가속화될 것입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative background glow */}
          <div className="absolute right-0 bottom-0 w-96 h-96 bg-emerald-500/20 blur-[100px] rounded-full" />
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-emerald-500/20 rounded-md border border-emerald-500/30">
              <TrendingUp className="text-emerald-400" size={18} />
            </div>
            <span className="text-sm font-bold text-gray-200 uppercase tracking-widest">
              2026 Strategic Analysis
            </span>
          </div>
          
          <div className="text-xs text-gray-500 font-mono">
            © 2026 STRATEGIC ECONOMIC REPORT. ALL RIGHTS RESERVED.
          </div>
          
          <div className="flex gap-6 text-xs font-mono text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-emerald-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
