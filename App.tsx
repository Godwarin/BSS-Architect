import React, { useState, useEffect } from 'react';
import { HiveSlot, GearState, Tab } from './types';
import { BEES, GEAR_OPTIONS, HIVE_PRESETS } from './constants';
import { HiveGrid } from './components/HiveGrid';
import { AnalysisPanel } from './components/AnalysisPanel';
import ProgressionGuide from './components/ProgressionGuide';
import DevAbout from './components/DevAbout';
import { getRarityColor, exportHive } from './utils/hiveUtils';
import { Save, Upload, Hexagon, BarChart3, BookOpen, Trash2, Sparkles, BrainCircuit, PaintBucket, LayoutTemplate } from 'lucide-react';

const App: React.FC = () => {
  // State
  const [activeTab, setActiveTab] = useState<Tab>('hive');
  const [hive, setHive] = useState<HiveSlot[]>(
    Array.from({ length: 50 }, (_, i) => ({ id: i, bee: null, gifted: false }))
  );
  const [hiveLevel, setHiveLevel] = useState<number>(1);
  const [gear, setGear] = useState<GearState>({
    mask: "None", 
    bag: "None", 
    boots: "None", 
    belt: "None",
    guards: "None",
    tool: "None",
    ssa_passive_1: "None", 
    ssa_passive_2: "None"
  });
  
  // Selection State
  const [selectedBee, setSelectedBee] = useState<string | null>(null);
  const [isGiftedMode, setIsGiftedMode] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Place gifted bee into the first empty slot immediately
  const placeGiftedBee = (beeName: string) => {
    setHive(prev => {
      const idx = prev.findIndex(s => !s.bee);
      if (idx === -1) {
        alert('Нет свободных слотов в улье');
        return prev;
      }
      const next = prev.map((s, i) => i === idx ? { ...s, bee: beeName, gifted: true } : s);
      return next;
    });
  };

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('bss-hive-data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.hive) setHive(parsed.hive);
        if (parsed.gear) {
          // Merge with default to handle new fields if loading old save
          setGear(prev => ({ ...prev, ...parsed.gear }));
        }
        if (parsed.hiveLevel) setHiveLevel(parsed.hiveLevel);
      } catch (e) {
        console.error("Failed to load save", e);
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('bss-hive-data', JSON.stringify({ hive, gear, hiveLevel }));
  }, [hive, gear, hiveLevel]);

  // Handlers
  const updateSlot = (id: number) => {
     setHive(prev => prev.map(slot => {
      if (slot.id !== id) return slot;
      
      // If gifted mode is ON, toggle gifted status of existing bee
      if (isGiftedMode && slot.bee) {
        return { ...slot, gifted: !slot.gifted };
      }
      
      // Eraser
      if (selectedBee === "Eraser") {
        return { ...slot, bee: null, gifted: false };
      }

      // Otherwise place selected bee
      if (selectedBee) {
        return { ...slot, bee: selectedBee, gifted: false }; // Reset gifted on new place
      }
      
      return slot;
    }));
  };

  const handleMouseDown = (id: number) => {
    setIsDragging(true);
    updateSlot(id);
  };

  const handleMouseEnter = (id: number) => {
    if (isDragging) {
      updateSlot(id);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const clearHive = () => {
    if (confirm("Вы уверены, что хотите очистить улей?")) {
      setHive(prev => prev.map(s => ({ ...s, bee: null, gifted: false })));
    }
  };

  const fillEmptySlots = () => {
    if (!selectedBee || selectedBee === "Eraser") return;
    setHive(prev => prev.map(s => s.bee ? s : { ...s, bee: selectedBee, gifted: false }));
  };

  const loadPreset = (presetName: string) => {
    if (confirm(`Загрузить шаблон "${presetName}"? Это заменит текущий улей.`)) {
      const presetBees = HIVE_PRESETS[presetName as keyof typeof HIVE_PRESETS];
      if (presetBees) {
        setHive(prev => prev.map((s, idx) => {
          const raw = presetBees[idx];
          if (!raw) return { ...s, bee: null, gifted: false };
          const gifted = typeof raw === 'string' && raw.endsWith(' (g)');
          const beeName = typeof raw === 'string' && gifted ? raw.replace(/ \(g\)$/, '') : raw as string;
          return { ...s, bee: beeName || null, gifted: !!gifted };
        }));
      }
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (data.hive) setHive(data.hive);
        if (data.gear) setGear(prev => ({ ...prev, ...data.gear }));
      } catch (err) {
        alert("Неверный формат файла");
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 flex flex-col font-sans" onMouseUp={handleMouseUp}>
      {/* Header */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center text-slate-900 font-bold">
              <Hexagon size={20} fill="currentColor" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
              BSS Архитектор
            </h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => exportHive(hive, gear, hiveLevel)}
              className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors" title="Скачать JSON">
              <Save size={20} />
            </button>
            <label className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer" title="Загрузить JSON">
              <Upload size={20} />
              <input type="file" className="hidden" onChange={handleFileUpload} accept=".json" />
            </label>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="bg-slate-900/50 border-b border-slate-800">
        <div className="container mx-auto px-4 flex gap-6 overflow-x-auto">
          <button 
            onClick={() => setActiveTab('hive')}
            className={`py-4 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'hive' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            <Hexagon size={16} /> Создание улья
          </button>
          <button 
            onClick={() => setActiveTab('analysis')}
            className={`py-4 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'analysis' ? 'border-blue-500 text-blue-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            <BarChart3 size={16} /> Анализ Мета-Билдов
          </button>
          <button 
            onClick={() => setActiveTab('guide')}
            className={`py-4 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'guide' ? 'border-green-500 text-green-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            <BookOpen size={16} /> Справка
          </button>
          <button 
            onClick={() => setActiveTab('dev')}
            className={`py-4 text-sm font-medium border-b-2 flex items-center gap-2 transition-colors whitespace-nowrap ${activeTab === 'dev' ? 'border-amber-500 text-amber-400' : 'border-transparent text-slate-400 hover:text-white'}`}
          >
            <BrainCircuit size={16} /> Разработка
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        
        {activeTab === 'hive' && (
          <div className="flex flex-col-reverse lg:flex-row gap-8">
            {/* Left: Controls & Palette - MOVED TO BOTTOM/LEFT ON MOBILE */}
            <div className="lg:w-80 flex-shrink-0 space-y-6">
              
              {/* Tools & Presets */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-4">
                 <h3 className="font-bold text-slate-400 uppercase text-xs tracking-wider flex items-center gap-2">
                   <LayoutTemplate size={14} /> Шаблоны и Инструменты
                 </h3>
                 

                 <div className="grid grid-cols-2 gap-2">
                    <button 
                        onClick={() => { setSelectedBee(null); setIsGiftedMode(!isGiftedMode); }}
                        className={`flex items-center justify-center gap-1 p-2 rounded text-xs font-bold border transition-all ${isGiftedMode ? 'bg-amber-900/40 border-amber-500 text-amber-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
                    >
                        <Sparkles size={14} /> {isGiftedMode ? 'Star Mode' : 'Одарение'}
                    </button>
                    <button 
                        onClick={() => { setSelectedBee("Eraser"); setIsGiftedMode(false); }}
                        className={`flex items-center justify-center gap-1 p-2 rounded text-xs font-bold border transition-all ${selectedBee === "Eraser" ? 'bg-red-900/40 border-red-500 text-red-400' : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'}`}
                    >
                      <Trash2 size={14} /> Ластик
                    </button>
                 </div>
                 
                 <div className="mt-3">
                   <label className="text-[10px] text-slate-500 uppercase">Уровень улья</label>
                   <input type="number" min={1} max={50} value={hiveLevel} onChange={(e) => setHiveLevel(Math.max(1, Math.min(50, Number(e.target.value) || 1)))} className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300" />
                 </div>
                 {/* Templates removed per request - presets are hidden */}

                 <button onClick={clearHive} className="text-xs text-red-500 hover:underline w-full text-center">
                   Очистить все слоты
                 </button>
              </div>

              {/* Palette */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800">
                <h3 className="font-bold text-slate-400 uppercase text-xs tracking-wider mb-3">Палитра пчел</h3>
                <div className="h-[300px] overflow-y-auto pr-2 space-y-1 custom-scrollbar">
                  {BEES.map(bee => (
                    <div key={bee.name} className={`w-full px-3 py-2 rounded text-sm transition-colors flex items-center justify-between ${selectedBee === bee.name ? 'bg-slate-700 ring-1 ring-amber-500' : 'hover:bg-slate-800'}`}>
                      <button onClick={() => { setSelectedBee(bee.name); setIsGiftedMode(false); }} className="flex-1 text-left">
                        <span className={getRarityColor(bee.rarity)}>{bee.name}</span>
                      </button>
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${bee.color === 'Red' ? 'bg-red-500' : bee.color === 'Blue' ? 'bg-blue-500' : 'bg-slate-500'}`}></div>
                        <button title="Поставить одарённую" onClick={(e) => { e.stopPropagation(); placeGiftedBee(bee.name); }} className="p-1 rounded hover:bg-slate-800">
                          <Sparkles size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
               {/* Gear Selectors - FULL LIST */}
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-4">
                <h3 className="font-bold text-slate-400 uppercase text-xs tracking-wider">Снаряжение</h3>
                <div className="space-y-3">
                    <div>
                        <label className="text-[10px] text-slate-500 uppercase">Маска</label>
                        <select 
                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300"
                        value={gear.mask}
                        onChange={(e) => setGear({...gear, mask: e.target.value})}
                        >
                        {GEAR_OPTIONS.masks.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="text-[10px] text-slate-500 uppercase">Рюкзак (Bag)</label>
                        <select 
                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300"
                        value={gear.bag}
                        onChange={(e) => setGear({...gear, bag: e.target.value})}
                        >
                        {GEAR_OPTIONS.bags.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-slate-500 uppercase">Инструмент (Tool)</label>
                      <select 
                      className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300"
                      value={gear.tool || 'None'}
                      onChange={(e) => setGear({...gear, tool: e.target.value})}
                      >
                      {(GEAR_OPTIONS as any).tools.map((m: string) => <option key={m} value={m}>{m}</option>)}
                      </select>
                    </div>

                    <div>
                        <label className="text-[10px] text-slate-500 uppercase">Ботинки (Boots)</label>
                        <select 
                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300"
                        value={gear.boots}
                        onChange={(e) => setGear({...gear, boots: e.target.value})}
                        >
                        {GEAR_OPTIONS.boots.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="text-[10px] text-slate-500 uppercase">Пояс (Belt)</label>
                        <select 
                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300"
                        value={gear.belt}
                        onChange={(e) => setGear({...gear, belt: e.target.value})}
                        >
                        {GEAR_OPTIONS.belts.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>

                    <div>
                        <label className="text-[10px] text-slate-500 uppercase">Наплечники (Guards)</label>
                        <select 
                        className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300"
                        value={gear.guards}
                        onChange={(e) => setGear({...gear, guards: e.target.value})}
                        >
                        {GEAR_OPTIONS.guards.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                    </div>

                    <div className="pt-2 border-t border-slate-800">
                         <label className="text-[10px] text-amber-500 uppercase font-bold">SSA (Supreme Star)</label>
                         <select 
                            className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300 mb-2"
                            value={gear.ssa_passive_1}
                            onChange={(e) => setGear({...gear, ssa_passive_1: e.target.value})}
                        >
                            <option value="None">Passive 1: None</option>
                            {GEAR_OPTIONS.passives.filter(p => p !== 'None').map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                        <select 
                            className="w-full bg-slate-800 border border-slate-700 rounded p-1 text-xs text-slate-300"
                            value={gear.ssa_passive_2}
                            onChange={(e) => setGear({...gear, ssa_passive_2: e.target.value})}
                        >
                            <option value="None">Passive 2: None</option>
                            {GEAR_OPTIONS.passives.filter(p => p !== 'None').map(p => <option key={p} value={p}>{p}</option>)}
                        </select>
                    </div>
                </div>
              </div>

            </div>

            {/* Center: Grid */}
            <div className="flex-1 flex justify-center items-start">
               <HiveGrid 
                  hive={hive} 
                  onSlotMouseDown={handleMouseDown}
                  onSlotMouseEnter={handleMouseEnter}
                  onSlotMouseUp={handleMouseUp}
               />
            </div>
          </div>
        )}

        {/* Advisor tab removed */}
        {activeTab === 'analysis' && <AnalysisPanel hive={hive} gear={gear} />}
        {activeTab === 'guide' && <ProgressionGuide />}
        {activeTab === 'dev' && <DevAbout />}

      </main>
    </div>
  );
};

export default App;