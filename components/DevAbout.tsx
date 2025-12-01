import React from 'react';

export const DevAbout: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-fadeIn">
      <section className="bg-slate-900 border border-slate-700 rounded-xl p-6">
        <h2 className="text-2xl font-bold text-amber-300 mb-2">Разработка — Кто мы</h2>
        <div className="prose prose-invert text-slate-300">
          <p>
            Авторы сайта не несут ответственности за использование читов или другого запрещённого ПО.
            Всё, что здесь написано, — лишь мысли и предположения авторов.
            Мы любим Онетта.
          </p>

          <p className="mt-4"><strong>Версия сайта:</strong> 0.5</p>
        </div>
      </section>
    </div>
  );
};

export default DevAbout;
