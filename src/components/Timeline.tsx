import React from 'react';
import { motion } from 'motion/react';
import { TIMELINE_EVENTS } from '../data/mockData';
import { Calendar, Circle } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <div className="relative pl-8 space-y-12 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gray-800">
      {TIMELINE_EVENTS.map((event, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -left-[29px] top-1.5 p-1 bg-gray-900 rounded-full border border-gray-700 group-hover:border-emerald-500 transition-colors">
            <Circle size={10} className="text-gray-600 group-hover:text-emerald-500 fill-current" />
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <Calendar size={14} className="text-emerald-400" />
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
              {event.date}
            </span>
          </div>
          
          <h4 className="text-lg font-bold text-gray-100 mb-2 group-hover:text-emerald-400 transition-colors">
            {event.title}
          </h4>
          
          <p className="text-sm text-gray-400 leading-relaxed max-w-xl">
            {event.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};
