import React from 'react';

export const DevAbout: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      <section className="bg-slate-900 border border-slate-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-amber-300 mb-2">Разработка — Кто мы</h2>
        <p className="text-slate-300 mb-4">
          Приветствуем всех! Сайт создан группой энтузиастов из сообщества <strong>Lilkavoner</strong>.
          Цель проекта — помогать игрокам BSS и одновременно давать автору сайта возможность учиться
          и развиваться в программировании.
        </p>

        <div className="prose prose-invert text-slate-300">
          <p>
            Мы благодарны сообществу за вдохновение и свежие идеи. Если у вас есть предложения или вы хотите
            помочь — пишите в наши соцсети ниже.
          </p>

          <h4 className="text-white">Наши контакты</h4>
          <ul className="list-disc ml-5">
            <li>Discord: Lilkavoner (пример)</li>
            <li>Telegram: @Lilkavoner (пример)</li>
            <li>GitHub: <a className="text-amber-400 underline" href="https://github.com/Godwarin">Godwarin</a></li>
          </ul>

          <p className="mt-4">Спасибо за использование сайта — удачных ульев и тёплых медовых рек!</p>
        </div>
      </section>
    </div>
  );
};

export default DevAbout;
