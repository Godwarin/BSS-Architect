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
    <div className="p-6 text-slate-300">
      <ol className="list-decimal ml-6 space-y-2">
        <li><b>Tabby Bee</b><br/>Бонус: +50% Critical Power. ВСЕГДА первая. Основа любого улья.</li>
        <li><b>Gummy Bee</b><br/>Бонус: +5% Honey Per Pollen. Чистый прирост к фарму меда.</li>
        <li><b>Bear Bee</b><br/>Бонус: +10% pollen. Всегда приятно.</li>
        <li><b>Vicious Bee</b><br/>Бонус: -15% Длительности респавна монстров + урон к шипам.</li>
        <li><b>Festive Bee</b><br/>Бонус: ×1.25 convert rate at hive. Один из самых важных аспектов для любого игрока в early-mid game.</li>
        <li><b>Puppy Bee</b><br/>Бонус: -20% Печенья на пчелу (меньше жрать будет).</li>
        <li><b>Windy Bee</b><br/>Бонус: +15% install white conversion, ×2 усиление от облаков, белая пыльца везде, облака на рандомные поля, дают +50% pollen.</li>
        <li><b>Digital Bee</b><br/>Бонус: +1% ability duplication chance. Одар на эту пчелу юзлесс если ты в синей.</li>
      </ol>
    </div>
  </section>
);

export const GearProgressionPath = () => (
  <section className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden">
    <div className="bg-blue-600/20 p-4 border-b border-blue-600/30 flex items-center gap-2">
      <Shield className="text-blue-400" />
      <h2 className="text-xl font-bold text-blue-100">Путь развития снаряжения</h2>
    </div>
    <div className="p-6 text-slate-300">
      <ol className="list-decimal ml-6 space-y-2">
        <li><b>Bubble Mask</b><br/>Первый серьёзный шаг. В начале используем синюю пыльцу, даёт много бустов для синей и пассивка Bubble Bombs делает её ещё лучше.</li>
        <li><b>Cobalt Guard</b><br/>Увеличение вместимости синей пыльцы, критов и синих бомб — не заменима. Фармим от бомб на этом этапе.</li>
        <li><b>Petal Belt</b><br/>Не жертвуйте первый лепесток (Petal) в храм! Скрафтите ремень Petal Belt.</li>
        <li><b>Diamond Mask</b><br/>Усиление Bubble Mask в 2 раза. Мастхев на этом этапе, пассивка diamond drain даёт большой прирост к фарму.</li>
        <li><b>SSA (Supreme Star Amulet)</b><br/>Требует 40 видов одарённых пчёл. Делайте уклон в синюю, выбивайте разные одарёнки.</li>
        <li><b>Coco Canister</b><br/>Увеличение вместимости — важный шаг после SSA.</li>
        <li><b>Coco Clogs</b><br/>Дополнительная скорость и суммарная полезность в поздней игре.</li>
      </ol>
    </div>
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

    </div>
  );
}