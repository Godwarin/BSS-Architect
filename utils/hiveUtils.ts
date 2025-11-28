import { BEES } from '../constants';
import { Rarity, Color } from '../types';

export const getBeeColorClass = (rarity: Rarity, color: Color): string => {
  // Border colors based on rarity
  if (rarity === 'Event') return 'bg-green-200 border-green-500 text-green-900';
  if (rarity === 'Mythic') return 'bg-purple-200 border-purple-500 text-purple-900';
  if (rarity === 'Legendary') return 'bg-cyan-100 border-cyan-400 text-cyan-900';
  if (rarity === 'Epic') return 'bg-yellow-100 border-yellow-400 text-yellow-900';
  if (rarity === 'Rare') return 'bg-slate-200 border-slate-400 text-slate-800';
  return 'bg-amber-50 border-amber-800 text-amber-950'; // Basic
};

export const getRarityColor = (rarity: Rarity) => {
  switch (rarity) {
    case 'Event': return 'text-green-400';
    case 'Mythic': return 'text-purple-400';
    case 'Legendary': return 'text-cyan-400';
    case 'Epic': return 'text-yellow-400';
    case 'Rare': return 'text-gray-300';
    default: return 'text-white';
  }
};

export const findBeeDef = (name: string) => BEES.find(b => b.name === name);

export const exportHive = (hive: any, gear: any) => {
  const data = JSON.stringify({ hive, gear }, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'bss-hive-build.json';
  a.click();
  URL.revokeObjectURL(url);
};