import React, { useState } from 'react';
import { HiveSlot, BuildTarget, GearState } from '../types';
import { META_BUILDS } from '../constants';
import { findBeeDef, getRarityColor } from '../utils/hiveUtils';
import { AlertCircle, CheckCircle2, Crown, ShieldAlert, Calculator, TrendingUp } from 'lucide-react';

interface AnalysisPanelProps {
  hive: HiveSlot[];
  gear: GearState;
}

export const AnalysisPanel: React.FC<AnalysisPanelProps> = ({ hive, gear }) => {
  const [selectedMeta, setSelectedMeta] = useState<BuildTarget>(META_BUILDS[0]);

  // Calculate current counts
  const currentCounts: Record<string, number> = {};
  let totalGifted = 0;
  let redBees = 0;
  let blueBees = 0;
  let colorlessBees = 0;
  let mythicCount = 0;
  let bombProducers = 0;
  let boostProducers = 0;
  
  hive.forEach(slot => {
    if (slot.bee) {
      currentCounts[slot.bee] = (currentCounts[slot.bee] || 0) + 1;
      const def = findBeeDef(slot.bee);
      if (def) {
          if (def.color === 'Red') redBees++;
          if (def.color === 'Blue') blueBees++;
          if (def.color === 'Colorless') colorlessBees++;
          if (def.rarity === 'Mythic') mythicCount++;
          
          // Basic Wiki Logic classification
          if (['Bomber Bee', 'Demo Bee', 'Lion Bee', 'Fuzzy Bee', 'Buoyant Bee'].includes(def.name)) bombProducers++;
          if (['Riley Bee', 'Bucko Bee', 'Rad Bee', 'Cool Bee', 'Music Bee'].includes(def.name)) boostProducers++;
      }
    }
    if (slot.gifted) totalGifted++;
  });

  // Compute color profile from selected meta composition (so UI reflects selected meta)
  const metaColorTotals = { red: 0, blue: 0, colorless: 0 };
  Object.entries(selectedMeta.composition).forEach(([beeName, cnt]) => {
    const def = findBeeDef(beeName);
    if (def) {
      if (def.color === 'Red') metaColorTotals.red += cnt as number;
      if (def.color === 'Blue') metaColorTotals.blue += cnt as number;
      if (def.color === 'Colorless') metaColorTotals.colorless += cnt as number;
    }
  });

  // Calculate Difference
  const differences: { bee: string; diff: number; current: number; target: number }[] = [];
  
  // Check what is missing/excess based on target composition
  Object.entries(selectedMeta.composition).forEach(([beeName, val]) => {
    const targetCount = val as number;
    const current = currentCounts[beeName] || 0;
    differences.push({
      bee: beeName,
      diff: current - targetCount,
      current,
      target: targetCount
    });
  });

  // Wiki Analysis Logic (Detailed)
  // Produce a farming prediction based on the selected meta (so it changes when user picks meta)
  const prediction = (() => {
    const name = selectedMeta.name.toLowerCase();
    if (name.includes('blue')) return {
      source: "Blue Boost + Bubbles + Balloons",
      desc: selectedMeta.description,
      eff: "Высокая для AFK"
    };
    if (name.includes('red')) return {
      source: "Red Boost + Precision + Flames",
      desc: selectedMeta.description,
      eff: "Высокая для Boosts"
    };
    return {
      source: "Mixed (Quests)",
      desc: selectedMeta.description,
      eff: "Средняя"
    };
  })();

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Target Selector */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {META_BUILDS.map((meta) => (
          <button
            key={meta.name}
            onClick={() => setSelectedMeta(meta)}
            className={`p-4 rounded-xl border text-left transition-all ${
              selectedMeta.name === meta.name
                ? 'bg-amber-500/20 border-amber-500 text-amber-100'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-750'
            }`}
          >
            <div className="font-bold flex items-center gap-2">
              <Crown size={16} className={selectedMeta.name === meta.name ? "text-amber-400" : "opacity-0"} />
              <div className="text-sm">{meta.name}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{selectedMeta.name}</h3>
        <p className="text-slate-300 mb-4">{selectedMeta.description}</p>
        <div className="text-sm text-slate-400">
          Требуется SSA: <span className="text-amber-300 font-mono">{selectedMeta.requiredPassive.join(" + ")}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Wiki Efficiency Stats */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 lg:col-span-2">
             <h4 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
                <Calculator className="text-purple-400" size={20} />
                Анализ эффективности и Фарма (Wiki)
             </h4>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                     <div className="text-sm text-slate-400 mb-2 font-bold uppercase">Цветовой профиль</div>
                    <div className="flex h-4 rounded-full overflow-hidden bg-slate-800 mb-2">
                      <div style={{ width: `${(metaColorTotals.red / 50) * 100}%` }} className="bg-red-500 transition-all"></div>
                      <div style={{ width: `${(metaColorTotals.blue / 50) * 100}%` }} className="bg-blue-500 transition-all"></div>
                      <div style={{ width: `${(metaColorTotals.colorless / 50) * 100}%` }} className="bg-slate-200 transition-all"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Red: {Math.round((metaColorTotals.red / 50) * 100)}%</span>
                      <span>Blue: {Math.round((metaColorTotals.blue / 50) * 100)}%</span>
                      <span>White: {Math.round((metaColorTotals.colorless / 50) * 100)}%</span>
                    </div>
                 </div>

                 <div>
                      <div className="text-sm text-slate-400 mb-2 font-bold uppercase">Источник фарма</div>
                      <div className="flex items-start gap-3 bg-slate-800/50 p-3 rounded">
                          <TrendingUp className="text-green-400 shrink-0 mt-1" size={18} />
                          <div>
                              <div className="font-bold text-green-300">{prediction.source}</div>
                              <div className="text-xs text-slate-400 mt-1">{prediction.desc}</div>
                          </div>
                      </div>
                 </div>
             </div>

             <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                 <div className="bg-slate-800 p-2 rounded">
                    <div className="text-xs text-slate-500">Boost Producers</div>
                    <div className="font-mono text-lg">{boostProducers}</div>
                 </div>
                 <div className="bg-slate-800 p-2 rounded">
                    <div className="text-xs text-slate-500">Bomb Producers</div>
                    <div className="font-mono text-lg">{bombProducers}</div>
                 </div>
                 <div className="bg-slate-800 p-2 rounded">
                    <div className="text-xs text-slate-500">Mythics</div>
                    <div className="font-mono text-lg text-purple-400">{mythicCount}</div>
                 </div>
                 <div className="bg-slate-800 p-2 rounded">
                    <div className="text-xs text-slate-500">Gifted Total</div>
                    <div className="font-mono text-lg text-yellow-400">{totalGifted}/50</div>
                 </div>
             </div>
        </div>

        {/* Missing / Excess Report */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
          <h4 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
            <AlertCircle className="text-red-400" size={20} />
            Что изменить для билда
          </h4>
          
          <div className="space-y-3 h-[400px] overflow-y-auto pr-2 custom-scrollbar">
            {differences.filter(d => d.diff !== 0).length === 0 && (
               <div className="text-green-400 flex items-center gap-2">
                 <CheckCircle2 /> Идеальное совпадение!
               </div>
            )}

            {differences
              .filter(d => d.diff !== 0)
              .sort((a, b) => a.diff - b.diff) // Negative (missing) first
              .map(item => {
                const beeDef = findBeeDef(item.bee);
                const isMissing = item.diff < 0;
                
                return (
                  <div key={item.bee} className="flex justify-between items-center bg-slate-800 p-3 rounded-lg border border-slate-700">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-8 rounded-full ${isMissing ? 'bg-red-500' : 'bg-blue-500'}`}></div>
                      <div>
                        <span className={`font-bold ${getRarityColor(beeDef?.rarity || 'Common')}`}>
                          {item.bee}
                        </span>
                        <div className="text-xs text-slate-400">
                          {isMissing ? 'Не хватает:' : 'Лишних:'} {Math.abs(item.diff)} (Нужно {item.target})
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* Gear Analysis */}
        <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
             <h4 className="text-lg font-bold text-white mb-4 border-b border-slate-700 pb-2 flex items-center gap-2">
                <ShieldAlert className="text-blue-400" size={20} />
                Проверка снаряжения
             </h4>
             <div className="space-y-3">
              {selectedMeta.recommendedGear && Object.entries(selectedMeta.recommendedGear).map(([slot, recItem]) => {
                const currentItem = gear[slot as keyof GearState];
                const isMatch = currentItem === recItem || recItem === 'Any';
                  return (
                    <div key={slot} className="flex justify-between items-center bg-slate-800 p-3 rounded-lg border border-slate-700">
                       <div>
                         <div className="text-xs uppercase text-slate-500 font-bold">{slot}</div>
                         <div className={`font-bold text-sm ${isMatch ? 'text-green-400' : 'text-red-400'}`}>
                           Цель: {recItem}
                         </div>
                       </div>
                       <div className="text-right">
                          <div className="text-xs text-slate-500">У вас:</div>
                      <div className={`text-sm ${isMatch ? 'text-slate-300' : 'text-slate-100 underline decoration-red-500'}`}>{currentItem || 'None'}</div>
                       </div>
                    </div>
                  )
               })}
               <div className="mt-4 pt-4 border-t border-slate-700">
                  <div className="text-xs text-slate-500 mb-1">SSA Passives Status:</div>
                  <div className="flex gap-2 text-sm items-center flex-wrap">
                      {selectedMeta.requiredPassive.map((p) => {
                        const has = p === gear.ssa_passive_1 || p === gear.ssa_passive_2;
                        return (
                          <span key={p} className={has ? "text-green-400 mr-2" : "text-red-400 mr-2"}>
                            {p}
                          </span>
                        );
                      })}
                  </div>
               </div>
             </div>
        </div>
      </div>
    </div>
  );
};