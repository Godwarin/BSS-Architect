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
      <EventBeeGiftPriority />
      <GearProgressionPath />
    </div>
  );
};

export const EventBeeGiftPriority = () => (
  <section>
    <h2>Приоритет одарения ивентовых пчёл (Star Treat)</h2>
    <ol>
      <li><b>Tabby Bee</b><br/>Бонус: +50% Critical Power. ВСЕГДА первая. Основа любого улья.</li>
      <li><b>Gummy Bee</b><br/>Бонус: +5% Honey Per Pollen. Чистый прирост к фарму меда.</li>
      <li><b>Bear Bee</b><br/>Бонус: +10% pollen. Всегда приятно.</li>
      <li><b>Vicious Bee</b><br/>Бонус: -15% Длительности респавна монстров + урон к шипам.</li>
      <li><b>Festive Bee</b><br/>Бонус: ×1.25 convert rate at hive. Один из самых важных аспектов для любого игрока в early-mid game.</li>
      <li><b>Puppy Bee</b><br/>Бонус: -20% Печенья на пчелу (меньше жрать будет).</li>
      <li><b>Windy Bee</b><br/>Бонус: +15% install white conversion, ×2 усиление от облаков, белая пыльца везде, облака на рандомные поля, дают +50% pollen.</li>
      <li><b>Digital Bee</b><br/>Бонус: +1% ability duplication chance. Одар на эту пчелу юзлесс если ты в синей.</li>
    </ol>
  </section>
);

export const GearProgressionPath = () => (
  <section>
    <h2>Путь развития снаряжения</h2>
    <ol>
      <li><b>Bubble Mask</b><br/>Первый серьёзный шаг. В начале используем синюю пыльцу, даёт много бустов для синей и пассивка Bubble Bombs делает её ещё лучше.</li>
      <li><b>Cobalt Guard</b><br/>Увеличение вместимости синей пыльцы, критов и синих бомб — не заменима. Фармим от бомб на этом этапе.</li>
      <li><b>Petal Belt</b><br/>Не жертвуйте первый лепесток (Petal) в храм! Скрафтите ремень Petal Belt.</li>
      <li><b>Diamond Mask</b><br/>Усиление Bubble Mask в 2 раза. Мастхев на этом этапе, пассивка diamond drain даёт большой прирост к фарму.</li>
      <li><b>SSA (Supreme Star Amulet)</b><br/>Требует 40 видов одарённых пчёл. Делайте уклон в синюю, выбивайте разные одарёнки.</li>
      <li><b>Coco Canister</b><br/>Увеличение вместимости — важный шаг после SSA.</li>
      <li><b>Coco Clogs</b><br/>Дополнительная скорость и суммарная полезность в поздней игре.</li>
    </ol>
  </section>
);

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