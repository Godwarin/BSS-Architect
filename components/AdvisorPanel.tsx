import React from 'react';
import { HiveSlot, GearState } from '../types';
import { AlertTriangle, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';

interface AdvisorPanelProps {
  hive: HiveSlot[];
  gear: GearState;
}

export const AdvisorPanel: React.FC<AdvisorPanelProps> = ({ hive, gear }) => {
  const adviceList: { title: string; desc: string; priority: 'high' | 'medium' | 'low'; done: boolean }[] = [];

  // Helper counts
  const counts: Record<string, number> = {};
  const giftedCounts: Record<string, boolean> = {};
  let totalBees = 0;

  hive.forEach(slot => {
    if (slot.bee) {
      counts[slot.bee] = (counts[slot.bee] || 0) + 1;
      totalBees++;
      if (slot.gifted) {
        giftedCounts[slot.bee] = true;
      }
    }
  });

  // --- 1. CORE COMPOSITION (Based on Voice Message) ---
  
  // Music Bees (Melody + Focus)
  const musicCount = counts['Music Bee'] || 0;
  if (musicCount < 3) {
    adviceList.push({
      title: 'Нужно больше Музыки (Music Bee)',
      desc: `У вас ${musicCount}/3 Music Bees. Друг говорит: "Нам нужны Мелодия и Фокус". Без критов фарм не идет. Добавьте Music Bees.`,
      priority: 'high',
      done: false
    });
  } else {
     adviceList.push({ title: 'Музыка в норме', desc: 'У вас достаточно Music Bees для поддержания Melody.', priority: 'low', done: true });
  }

  // Baby Bee (Baby Love)
  const babyCount = counts['Baby Bee'] || 0;
  if (babyCount < 1) {
    adviceList.push({
      title: 'Нет Baby Love (Baby Bee)',
      desc: 'Вам нужна хотя бы 1 Baby Bee (или Gifted Tadpole). Бафф "Baby Love" дает x2 Pollen. Это обязательно.',
      priority: 'high',
      done: false
    });
  } else {
    adviceList.push({ title: 'Baby Love есть', desc: 'Baby Bee присутствует.', priority: 'low', done: true });
  }

  // --- 2. GIFTED EVENT PRIORITY ---
  
  // Tabby Bee
  if (!counts['Tabby Bee']) {
    adviceList.push({ title: 'КУПИТЕ TABBY BEE', desc: 'Это самая важная пчела. Копите билеты (500 tickets) в первую очередь на нее.', priority: 'high', done: false });
  } else if (!giftedCounts['Tabby Bee']) {
    adviceList.push({ title: 'Сделайте Tabby Bee Одаренной', desc: 'Приоритет №1 для Star Treat. Critical Power +50% это база.', priority: 'high', done: false });
  } else {
    adviceList.push({ title: 'Tabby Bee Одарена', desc: 'Отличная работа. Критический урон на месте.', priority: 'low', done: true });
  }

  // Photon Bee
  if (counts['Tabby Bee'] && !counts['Photon Bee']) {
    adviceList.push({ title: 'Купите Photon Bee', desc: 'Следующая после Tabby за 500 билетов.', priority: 'medium', done: false });
  } else if (counts['Photon Bee'] && giftedCounts['Tabby Bee'] && !giftedCounts['Photon Bee']) {
    adviceList.push({ title: 'Сделайте Photon Bee Одаренной', desc: 'Приоритет №2 для Star Treat. +5% Instant Conversion спасает рюкзак от переполнения.', priority: 'high', done: false });
  }

  // --- 3. ESSENTIAL GIFTED BEES ---

  // Basic Bee
  if (!giftedCounts['Basic Bee']) {
    adviceList.push({
      title: 'Где Gifted Basic Bee?',
      desc: 'Друг настаивает: "Basic Bee x1.2 Pollen - Must Have". Купите яйца за семечки или кормите семечками обычную пчелу, пока она не станет одаренной.',
      priority: 'high',
      done: false
    });
  } else {
    adviceList.push({ title: 'Gifted Basic Bee получена', desc: 'Бонус x1.2 Pollen активен.', priority: 'low', done: true });
  }

  // Looker & Commander (Crits)
  if (!giftedCounts['Looker Bee'] || !giftedCounts['Commander Bee']) {
    adviceList.push({
      title: 'Криты (Looker & Commander)',
      desc: 'Постарайтесь получить одаренных Looker (+Crit Power) и Commander (+Crit Chance). Это дешевый способ поднять урон и фарм.',
      priority: 'medium',
      done: false
    });
  }

  // --- 4. GEAR CHECK ---
  if (gear.mask === 'None' && totalBees > 25) {
    adviceList.push({ title: 'Скрафтите Honey Mask', desc: 'Если у вас 25+ пчел, вам срочно нужна медовая маска для пассивки Coin Scatter.', priority: 'high', done: false });
  }

  // --- 5. ENDGAME TRANSITION ---
  const hasSSA = gear.ssa_passive_1 !== 'None';
  const isBlueMeta = counts['Buoyant Bee'] >= 10;
  
  if (totalBees >= 40 && !hasSSA && (counts['Precise Bee'] > 5 || counts['Spicy Bee'] > 5)) {
    adviceList.push({
      title: 'ОШИБКА: Рано пошли в Красный',
      desc: 'Друг говорит: "Red пчелы фармят мало в начале". Не делайте красный улей без Double Passive SSA (Scorching+Saw) и всех одаренных пчел. Лучше будьте Mixed или Blue.',
      priority: 'high',
      done: false
    });
  }
  
  if (totalBees >= 40 && !hasSSA && !isBlueMeta) {
    adviceList.push({
      title: 'Готовьтесь к Синему (Blue Hive)',
      desc: 'Как только получите SSA, цельтесь в Pop Star. Это самый дешевый билд. Вам нужны Buoyant и Tadpole. Не тратьте мед на смену цвета до получения SSA.',
      priority: 'medium',
      done: false
    });
  }

  // Sort: High priority first, Done items last
  adviceList.sort((a, b) => {
    if (a.done === b.done) {
      if (a.priority === 'high' && b.priority !== 'high') return -1;
      if (a.priority !== 'high' && b.priority === 'high') return 1;
      if (a.priority === 'medium' && b.priority === 'low') return -1;
      if (a.priority === 'low' && b.priority === 'medium') return 1;
      return 0;
    }
    return a.done ? 1 : -1;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fadeIn">
      <div className="bg-gradient-to-r from-blue-900 to-slate-900 p-6 rounded-xl border border-blue-500 shadow-lg text-white">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <Lightbulb className="text-blue-300" size={32} />
          Советник: Стратегия Early Blue Hive
        </h2>
        <p className="opacity-90 mt-2">
          Анализ вашего текущего улья ({totalBees} пчел) на основе гайда друга и перехода в ранний синий.
        </p>
      </div>

      <div className="space-y-4">
        {adviceList.map((item, idx) => (
          <div 
            key={idx} 
            className={`
              p-5 rounded-xl border flex items-start gap-4 transition-all
              ${item.done 
                ? 'bg-slate-900/50 border-slate-800 opacity-60' 
                : item.priority === 'high' 
                  ? 'bg-slate-800 border-l-4 border-l-red-500 border-slate-700 shadow-lg shadow-red-900/10' 
                  : 'bg-slate-800 border-l-4 border-l-amber-500 border-slate-700'}
            `}
          >
            <div className="mt-1 flex-shrink-0">
              {item.done ? (
                <CheckCircle className="text-green-500" />
              ) : item.priority === 'high' ? (
                <AlertTriangle className="text-red-500" />
              ) : (
                <TrendingUp className="text-amber-500" />
              )}
            </div>
            
            <div className="flex-1">
              <h3 className={`font-bold text-lg ${item.done ? 'text-slate-400 line-through' : 'text-slate-100'}`}>
                {item.title}
              </h3>
              <p className="text-slate-400 mt-1 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            {!item.done && item.priority === 'high' && (
              <div className="bg-red-500/10 text-red-400 px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                Важно
              </div>
            )}
          </div>
        ))}

        {adviceList.length === 0 && (
          <div className="text-center p-10 text-slate-500">
            Добавьте пчел в улей, чтобы получить советы.
          </div>
        )}
      </div>
    </div>
  );
};