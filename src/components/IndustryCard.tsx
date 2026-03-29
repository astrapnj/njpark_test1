import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, TrendingDown, Minus, Info } from 'lucide-react';
import { IndustryData } from '../data/mockData';
import { StockChart } from './StockChart';
import { cn } from '../lib/utils';

interface IndustryCardProps {
  data: IndustryData;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ data }) => {
  const isPositive = data.impact === 'positive';
  const isNegative = data.impact === 'negative';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-xl overflow-hidden relative group"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1 block">
            {data.category}
          </span>
          <h3 className="text-xl font-bold text-gray-100">{data.name}</h3>
        </div>
        <div className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-full text-sm font-bold",
          isPositive ? "bg-emerald-500/10 text-emerald-400" : 
          isNegative ? "bg-rose-500/10 text-rose-400" : 
          "bg-gray-500/10 text-gray-400"
        )}>
          {isPositive ? <TrendingUp size={16} /> : 
           isNegative ? <TrendingDown size={16} /> : 
           <Minus size={16} />}
          {data.changeRate > 0 ? '+' : ''}{data.changeRate}%
        </div>
      </div>

      <div className="mb-6">
        <StockChart data={data.trend} impact={data.impact} />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-end">
          <div className="text-sm text-gray-400">현재가 (KRW)</div>
          <div className="text-2xl font-mono font-bold text-gray-100">
            {data.currentPrice.toLocaleString()}
          </div>
        </div>
        
        <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700/50 flex gap-3 items-start">
          <Info size={18} className="text-blue-400 shrink-0 mt-0.5" />
          <p className="text-sm text-gray-300 leading-relaxed">
            {data.description}
          </p>
        </div>
      </div>

      {/* Decorative background element */}
      <div className={cn(
        "absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-10 rounded-full",
        isPositive ? "bg-emerald-500" : isNegative ? "bg-rose-500" : "bg-gray-500"
      )} />
    </motion.div>
  );
};
