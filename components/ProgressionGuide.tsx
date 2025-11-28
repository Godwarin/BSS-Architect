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
              <h3 className="font-bold text-white text-lg">Photon Bee</h3>
              <p className="text-sm mt-1">
                <span className="text-amber-400">Бонус:</span> +5% Instant Conversion.
                Критически важна, чтобы рюкзак не заполнялся слишком быстро.
              </p>
            </li>
            <li className="pl-6 relative">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-xs">3</span>
              <h3 className="font-bold text-white text-lg">Gummy Bee</h3>
              <p className="text-sm mt-1">
                <span className="text-amber-400">Бонус:</span> +5% Honey Per Pollen.
                Чистый прирост к фарму меда.
              </p>
            </li>
            <li className="pl-6 relative">
              <span className="absolute -left-3 top-1 w-6 h-6 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold text-xs">4</span>
              <h3 className="font-bold text-white text-lg">Bear Bee (Если есть)</h3>
              <p className="text-sm mt-1">Массивный буст пыльцы. Если не куплена, переходите к Vicious (для атаки) или Windy.</p>
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
                 <h4 className="font-bold text-white">Honey Mask</h4>
                 <p className="text-sm text-slate-400">Первый серьезный шаг. Пассивка Coin Scatter обязательна.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">02</div>
               <div>
                 <h4 className="font-bold text-white">Honeycomb Belt & Crimson/Cobalt Guards</h4>
                 <p className="text-sm text-slate-400">Увеличение вместимости и урона.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">03</div>
               <div>
                 <h4 className="font-bold text-white">Petal Wand</h4>
                 <p className="text-sm text-slate-400">Не жертвуйте первый лепесток (Petal) в храм! Скрафтите этот посох.</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">04</div>
               <div>
                 <h4 className="font-bold text-white">Coco Canister & Clogs</h4>
                 <p className="text-sm text-slate-400">Самый сложный этап мид-гейма. Сначала крафтите Canister (Рюкзак), потом Clogs (Тапки).</p>
               </div>
             </div>
             <div className="bg-slate-800 p-4 rounded-lg flex items-center gap-4">
               <div className="text-2xl font-black text-slate-600">05</div>
               <div>
                 <h4 className="font-bold text-white">SSA (Supreme Star Amulet)</h4>
                 <p className="text-sm text-slate-400">Требует 40 видов одаренных пчел. Не меняйте цвет улья до получения этого амулета!</p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Meta Tips */}
      <section className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
        <div className="bg-purple-600/20 p-4 border-b border-purple-600/30 flex items-center gap-2">
          <Zap className="text-purple-400" />
          <h2 className="text-xl font-bold text-purple-100">Переход в Эндгейм (Meta)</h2>
        </div>
        <div className="p-6 text-slate-300 space-y-4">
           <p><strong className="text-white">Правило №1:</strong> Оставайтесь "Смешанным" (Mixed Hive) пока не получите SSA. Ранняя специализация убьет ваш прогресс в квестах.</p>
           <p><strong className="text-white">Почему синий первый? (Blue Hive)</strong> Синий требует меньше всего меда для эффективности. Вам нужен только Pop Star SSA и несколько Buoyant/Tadpole пчел. Это самый дешевый способ делать триллионы меда.</p>
           <p><strong className="text-white">Когда переходить в Красный? (Red Hive)</strong> Только когда у вас есть Double Passive SSA (Scorching + Saw) и достаточно меда (500T+), чтобы сделать всех пчел одаренными. Красный улей без одаренных мификов слаб.</p>
        </div>
      </section>

    </div>
  );
};