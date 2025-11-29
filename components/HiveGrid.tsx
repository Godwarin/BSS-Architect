import React from 'react';
import { HiveSlot } from '../types';
import { getBeeColorClass, findBeeDef } from '../utils/hiveUtils';

interface HiveGridProps {
  hive: HiveSlot[];
  onSlotMouseDown: (id: number) => void;
  onSlotMouseEnter: (id: number) => void;
  onSlotMouseUp: () => void;
}

export const HiveGrid: React.FC<HiveGridProps> = ({ 
  hive, 
  onSlotMouseDown, 
  onSlotMouseEnter,
  onSlotMouseUp
}) => {
  return (
    <div 
      className="flex flex-col-reverse items-center justify-center gap-2 p-6 bg-slate-900 rounded-xl border border-slate-700 shadow-2xl relative overflow-hidden select-none"
      onMouseUp={onSlotMouseUp}
      onMouseLeave={onSlotMouseUp} // Stop dragging if left grid area
    >
      {/* Background Honeycomb Pattern Effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#fbbf24 2px, transparent 2px)', backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 grid grid-cols-5 gap-3 sm:gap-4 md:gap-5">
        {hive.map((slot) => {
          const beeDef = slot.bee ? findBeeDef(slot.bee) : null;
          const baseStyle = beeDef 
            ? getBeeColorClass(beeDef.rarity, beeDef.color) 
            : 'bg-slate-800 border-slate-700 text-slate-500';
          
          const giftedStyle = slot.gifted 
            ? 'ring-4 ring-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.6)] z-10 scale-105' 
            : '';

          return (
            <button
              key={slot.id}
              onMouseDown={() => onSlotMouseDown(slot.id)}
              onMouseEnter={() => onSlotMouseEnter(slot.id)}
              className={`
                w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20
                rounded-2xl border-2 font-bold text-xs sm:text-sm
                flex items-center justify-center text-center leading-tight
                transition-all duration-100 hover:scale-110 active:scale-95
                ${baseStyle} ${giftedStyle}
              `}
            >
              {slot.bee ? (
                <div className="flex flex-col items-center pointer-events-none">
                  {/* bee icon from /public/bees/<slug>.png - fallback to text if not present */}
                  <img
                    src={`/bees/${slot.bee.toLowerCase().replace(/[^a-z0-9]+/gi, '-')}.png`}
                    alt={slot.bee}
                    className="w-10 h-10 object-contain mb-1"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-[10px] opacity-80">{slot.bee.split(' ')[0]}</span>
                  {slot.gifted && <span className="text-[10px] text-yellow-700 font-extrabold uppercase">Star</span>}
                </div>
              ) : (
                <span className="opacity-20 text-2xl pointer-events-none">+</span>
              )}
            </button>
          );
        })}
      </div>
      
      <div className="mt-4 text-slate-400 text-sm italic flex items-center gap-2">
         <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
         Зажмите мышку и проведите, чтобы "рисовать" пчелами
      </div>
    </div>
  );
};