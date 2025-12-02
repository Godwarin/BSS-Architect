import React from 'react';

export const DevAbout: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      <section className="bg-slate-900 border border-slate-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-amber-300 mb-4">Разработка — Кто мы</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 shadow flex flex-col">
            <div className="font-bold text-amber-200 text-lg mb-1">Punkt <span className="text-xs text-slate-400">(Разработчик сайта)</span></div>
            <div className="text-slate-300 text-sm">Имею 4 сервера с 10 эмуляторами на которых стоит макрос (сумма акаунтов = 42). 10 долларов буст, создатель куче-хайв меты. Основатель коллективной нейросети BSS-01, знаю что такое ХПП и ГУГЫ. (телеграм не дам украдуть нейросеть)</div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 shadow flex flex-col">
            <div className="font-bold text-amber-200 text-lg mb-1">Saxarok <span className="text-xs text-slate-400">(Помогал)</span></div>
            <div className="text-slate-300 text-sm">Обучил 500 людей, имеет приватный телеграм канал, 100T boost доступ к которому можно найти в его профиле — <a href="https://t.me/Saxarok22848" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">@Saxarok22848</a></div>
          </div>
          <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 shadow flex flex-col">
            <div className="font-bold text-amber-200 text-lg mb-1">Amplituda <span className="text-xs text-slate-400">(Помогал)</span></div>
            <div className="text-slate-300 text-sm">Топер красной пыльцы, имеет 20-21 хайв, делал 2Q boost, Имеет 3 аккаунта более с чем 2000 драйверами дигитал би, прокачивался в пчёлах 14+ раз, создатель инь-янь меты, вся красная пыльца на сайте его рук дело. Ссылка на его тгк у него в био — <a href="https://t.me/itsAmplituda" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">@itsAmplituda</a></div>
          </div>
        </div>
        <div className="bg-slate-800 rounded-lg p-4 border border-slate-700 shadow mb-4">
          <div className="font-bold text-amber-200 text-lg mb-1">Группа Liklavoner</div>
          <div className="text-slate-300 text-sm">Приветствуем всех, сайт создан группой энтузиастов с секретной группы Liklavoner.</div>
        </div>
        <div className="prose prose-invert text-slate-300 text-sm mb-2">
          <p>Авторы сайта не несут ответственности за использование читов или другого запрещённого ПО. Всё, что здесь написано, — лишь мысли и предположения авторов. Мы любим Онетта.</p>
        </div>
        <div className="text-slate-400 text-xs mb-2"><strong>Версия сайта:</strong> 0.6</div>
        <div className="text-center mt-6">
          <span className="text-slate-400 text-xs">Сайт был создан с помощью ИИ, если хотите научиться подобному — <a href="https://t.me/VBEvlog" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">VBE</a></span>
        </div>
      </section>
    </div>
  );
};

export default DevAbout;
