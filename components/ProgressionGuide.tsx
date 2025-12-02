import React from 'react';
import { Star, Shield } from 'lucide-react';

export default function ProgressionGuide() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      <EventBeeGiftPriority />
      <GearProgressionPath />
    </div>
  );
}

export const EventBeeGiftPriority = () => (
  <section className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
    <div className="bg-amber-600/20 p-4 border-b border-amber-600/30 flex items-center gap-2">
      <Star className="text-amber-400" />
      <h2 className="text-xl font-bold text-amber-100">Приоритет одарения ивентовых пчёл (Star Treat)</h2>
    </div>
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: 'Tabby Bee', bonus: '+50% Critical Power. ВСЕГДА первая. Основа любого улья.' },
          { name: 'Gummy Bee', bonus: '+5% Honey Per Pollen. Чистый прирост к фарму меда.' },
          { name: 'Bear Bee', bonus: '+10% pollen. Всегда приятно.' },
          { name: 'Vicious Bee', bonus: '-15% Длительности респавна монстров + урон к шипам.' },
          { name: 'Festive Bee', bonus: '×1.25 convert rate at hive. Один из самых важных аспектов для любого игрока в early-mid game.' },
          { name: 'Puppy Bee', bonus: '-20% Печенья на пчелу (меньше жрать будет).' },
          { name: 'Windy Bee', bonus: '+15% install white conversion, ×2 усиление от облаков, белая пыльца везде, облака на рандомные поля, дают +50% pollen.' },
          { name: 'Digital Bee', bonus: '+1% ability duplication chance. Одар на эту пчелу юзлесс если ты в синей.' },
        ].map((bee, idx) => (
          <div key={bee.name} className="bg-amber-900/30 border border-amber-700 rounded-lg p-4 flex flex-col gap-2 shadow">
            <div className="font-bold text-amber-200 text-lg">{idx + 1}. {bee.name}</div>
            <div className="text-amber-100 text-sm">{bee.bonus}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export const GearProgressionPath = () => (
  <section className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
    <div className="bg-blue-600/20 p-4 border-b border-blue-600/30 flex items-center gap-2">
      <Shield className="text-blue-400" />
      <h2 className="text-xl font-bold text-blue-100">Путь развития снаряжения</h2>
    </div>
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { name: 'Bubble Mask', desc: 'Первый серьёзный шаг. В начале используем синюю пыльцу, даёт много бустов для синей и пассивка Bubble Bombs делает её ещё лучше.' },
          { name: 'Cobalt Guard', desc: 'Увеличение вместимости синей пыльцы, критов и синих бомб — не заменима. Фармим от бомб на этом этапе.' },
          { name: 'Petal Belt', desc: 'Не жертвуйте первый лепесток (Petal) в храм! Скрафтите ремень Petal Belt.' },
          { name: 'Diamond Mask', desc: 'Усиление Bubble Mask в 2 раза. Мастхев на этом этапе, пассивка diamond drain даёт большой прирост к фарму.' },
          { name: 'SSA (Supreme Star Amulet)', desc: 'Требует 40 видов одарённых пчёл. Делайте уклон в синюю, выбивайте разные одарёнки.' },
          { name: 'Coco Canister', desc: 'Увеличение вместимости — важный шаг после SSA.' },
          { name: 'Coco Clogs', desc: 'Дополнительная скорость и суммарная полезность в поздней игре.' },
        ].map((item, idx) => (
          <div key={item.name} className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 flex flex-col gap-2 shadow">
            <div className="font-bold text-blue-200 text-lg">{idx + 1}. {item.name}</div>
            <div className="text-blue-100 text-sm">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
  // ...existing code...