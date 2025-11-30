import React from 'react';
import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export const ProgressionGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
      
      {/* Event Bee Priority */}
      <section className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
        <div className="bg-amber-600/20 p-4 border-b border-amber-600/30 flex items-center gap-2">
          <Star className="text-amber-400" />
          <h2 className="text-xl font-bold text-amber-100">Приоритет одарения ивентовых пчел (Star Treat)</h2>
        </div>
        <div className="p-6 text-slate-300">
          <p className="mb-4 text-sm text-slate-400">
            Используйте Star Treats в этом порядке для максимальной эффективности.
          </p>
          <ol className="relative border-l border-slate-700 ml-4 space-y-6">
            <li className="pl-6 relative">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-black font-bold text-xs">1</span>
              <h3 className="font-bold text-white text-lg">Tabby Bee</h3>
              <p className="text-sm mt-1">
                <span className="text-amber-400">Бонус:</span> +50% Critical Power. 
                ВСЕГДА первая. Основа любого улья.
              </p>
            </li>
            <li className="pl-6 relative">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-xs">2</span>
              <h3 className="font-bold text-white text-lg">Gummy Bee</h3>
              <p className="text-sm mt-1">
                <span className="text-amber-400">Бонус:</span> +5% Honey Per Pollen.
                Чистый прирост к фарму меда.
              </p>
            </li>
            <li className="pl-6 relative">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-xs">3</span>
              <h3 className="font-bold text-white text-lg">Bear / Vicious / Windy</h3>
              <p className="text-sm mt-1">Используйте Bear для пыльцы, Vicious для атаки, Windy для контроля — третий слот: один из этих вариантов в зависимости от стиля игры.</p>
            </li>
          </ol>
        </div>
      </section>

      {/* Gear Progression */}
      <section className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
        <div className="bg-blue-600/20 p-4 border-b border-blue-600/30 flex items-center gap-2">
          <Shield className="text-blue-400" />
          <h2 className="text-xl font-bold text-blue-100">Путь развития снаряжения</h2>
        </div>
        <div className="p-6">
           <div className="grid gap-4">
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">01</div>
               <div>
                 <h4 className="font-bold text-white">Bubble Mask</h4>
                 <p className="text-sm text-slate-400">Первый серьезный шаг. Пассивка Coin Scatter обязательна.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">02</div>
               <div>
                 <h4 className="font-bold text-white">Cobalt Guard</h4>
                 <p className="text-sm text-slate-400">Увеличение вместимости и урона.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">03</div>
               <div>
                 <h4 className="font-bold text-white">Petal Belt</h4>
                 <p className="text-sm text-slate-400">Не жертвуйте первый лепесток (Petal) в храм! Скрафтите ремень Petal Belt.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">04</div>
               <div>
                 <h4 className="font-bold text-white">Diamond Mask</h4>
                 <p className="text-sm text-slate-400">Сильный апгрейд для защиты и дополнительного баффа.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">05</div>
               <div>
                 <h4 className="font-bold text-white">SSA (Supreme Star Amulet)</h4>
                 <p className="text-sm text-slate-400">Требует 40 видов одаренных пчел. Не меняйте цвет улья до получения этого амулета!</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">06</div>
               <div>
                 <h4 className="font-bold text-white">Coco Canister</h4>
                 <p className="text-sm text-slate-400">Увеличение вместимости — важный шаг после SSA.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">07</div>
               <div>
                 <h4 className="font-bold text-white">Coco Clogs</h4>
                 <p className="text-sm text-slate-400">Дополнительная скорость и суммарная полезность в поздней игре.</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Meta Tips removed as requested */}

    </div>
  );
};