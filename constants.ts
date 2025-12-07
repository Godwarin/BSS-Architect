import { BeeDef, BuildTarget } from './types';

export const BEES: BeeDef[] = [
  // Event
  { name: 'Tabby Bee', rarity: 'Event', color: 'Colorless' },
  { name: 'Bear Bee', rarity: 'Event', color: 'Colorless' },
  { name: 'Gummy Bee', rarity: 'Event', color: 'Colorless' },
  { name: 'Vicious Bee', rarity: 'Event', color: 'Blue' },
  { name: 'Windy Bee', rarity: 'Event', color: 'Colorless' },
  { name: 'Digital Bee', rarity: 'Event', color: 'Colorless' },
  { name: 'Festive Bee', rarity: 'Event', color: 'Red' },
  { name: 'Crimson Bee', rarity: 'Event', color: 'Red' },
  { name: 'Cobalt Bee', rarity: 'Event', color: 'Blue' },
  { name: 'Puppy Bee', rarity: 'Event', color: 'Colorless' },
  
  // Mythic
  { name: 'Buoyant Bee', rarity: 'Mythic', color: 'Blue' },
  { name: 'Tadpole Bee', rarity: 'Mythic', color: 'Blue' },
  { name: 'Precise Bee', rarity: 'Mythic', color: 'Red' },
  { name: 'Spicy Bee', rarity: 'Mythic', color: 'Red' },
  { name: 'Fuzzy Bee', rarity: 'Mythic', color: 'Colorless' },
  { name: 'Vector Bee', rarity: 'Mythic', color: 'Colorless' },
  
  // Legendary
  { name: 'Music Bee', rarity: 'Legendary', color: 'Colorless' },
  { name: 'Baby Bee', rarity: 'Legendary', color: 'Colorless' },
  { name: 'Carpenter Bee', rarity: 'Legendary', color: 'Colorless' },
  { name: 'Diamond Bee', rarity: 'Legendary', color: 'Blue' },
  { name: 'Ninja Bee', rarity: 'Legendary', color: 'Blue' },
  { name: 'Demon Bee', rarity: 'Legendary', color: 'Red' },
  { name: 'Shy Bee', rarity: 'Legendary', color: 'Red' },
  { name: 'Lion Bee', rarity: 'Legendary', color: 'Colorless' },

  // Epic (Selected useful ones)
  { name: 'Honey Bee', rarity: 'Epic', color: 'Colorless' },
  { name: 'Commander Bee', rarity: 'Epic', color: 'Colorless' },
  { name: 'Rage Bee', rarity: 'Epic', color: 'Red' },
  { name: 'Riley Bee', rarity: 'Epic', color: 'Red' },
  { name: 'Bucko Bee', rarity: 'Epic', color: 'Blue' },
  { name: 'Bubble Bee', rarity: 'Epic', color: 'Blue' },
  { name: 'Fire Bee', rarity: 'Epic', color: 'Red' },
  { name: 'Shocked Bee', rarity: 'Epic', color: 'Colorless' },
  { name: 'Frosty Bee', rarity: 'Epic', color: 'Blue' },
  
  // Rare (Selected)
  { name: 'Looker Bee', rarity: 'Rare', color: 'Colorless' },
  { name: 'Stubborn Bee', rarity: 'Rare', color: 'Colorless' },
  { name: 'Hasty Bee', rarity: 'Rare', color: 'Colorless' },
  { name: 'Rad Bee', rarity: 'Rare', color: 'Red' },
  { name: 'Cool Bee', rarity: 'Rare', color: 'Blue' },
  { name: 'Bumble Bee', rarity: 'Rare', color: 'Blue' },
  { name: 'Basic Bee', rarity: 'Common', color: 'Colorless' },
];

export const META_BUILDS: BuildTarget[] = [
  {
    name: "Blue Hive (Macro Meta)",
    description: "Лучший выбор для фарма меда через макрос (AFK). Дешевый в сборке. Основной упор на пузыри (Bubbles) и шары (Balloons).",
      requiredPassive: ["Pop Star", "Star Shower"],
    recommendedGear: {
      mask: "Diamond Mask",
      bag: "Coconut Canister",
        boots: "Gummy Boots",
        guards: "Crimson/Cobalt Guards",
        belt: "Coco Belt",
      tool: "Tide Popper"
    },
    composition: {
      "Buoyant Bee": 16,
      "Tadpole Bee": 7,
      "Tabby Bee": 1,
      "Bear Bee": 1,
      "Gummy Bee": 1,
      "Windy Bee": 1,
      "Music Bee": 4,
      "Bumble Bee": 1,
      "Cool Bee": 1,
      "Commander Bee": 1,
      "Exhausted Bee": 1,
      "Bubble Bee": 1,
      "Bucko Bee": 1,
      "Ninja Bee": 1,
      "Festive Bee": 1,
      "Basic Bee": 1
    }
  },
  {
    name: "Guiding alt",
    description: "Guiding alt — специализация на бафах и токенах для поддержки. Ключевая одаренность: Stubborn Bee (gifted Stubborn). По факту важен сам хайв, а не конкретное снаряжение.",
    requiredPassive: ["Guiding Star"],
    minHiveLevel: 15,
    recommendedGear: {
      mask: "Не важно",
      bag: "Не важно",
      boots: "Не важно",
      guards: "Не важно",
      belt: "Не важно"
    },
    composition: {
      "Riley Bee": 33,
      "Shocked Bee": 5,
      "Hasty Bee": 1,
      "Buoyant Bee": 1,
      "Stubborn Bee": 1,
      "Bucko Bee": 1,
      "Bumble Bee": 1,
      "Festive Bee": 1,
      "Windy Bee": 1
    }
  },
  {
    name: "Red Hive (Attack/Boost)",
    description: "Активный стиль игры. Требует Scorching Star. Дорогой билд, нужен высокий уровень прокачки.",
    requiredPassive: ["Scorching Star", "Star Saw"],
    recommendedGear: {
      mask: "Demon Mask",
      bag: "Coconut Canister",
        boots: "Gummy Boots",
        guards: "Crimson/Cobalt Guards",
        belt: "Coco Belt",
        tool: "Dark Scythe"
    },
    composition: {
      "Precise Bee": 11,
      "Spicy Bee": 10,
      "Vector Bee": 11,
      "Tabby Bee": 1,
      "Bear Bee": 1,
      "Digital Bee": 1,
      "Crimson Bee": 1,
      "Tadpole Bee": 4,
      "Buoyant Bee": 1,
      "Carpenter Bee": 1,
      "Riley Bee": 2,
      "Commander Bee": 1,
      "Hasty Bee": 1,
      "Rad Bee": 1,
      "Photon Bee": 1,
      "Basic Bee": 1
    }
  },
  {
    name: "White Hive (RNG/Gummy)",
    description: "Самый дорогой улей. Требует двойной пассивки (Gummy + Saw) и много ресурсов. Завязан на Gummy Star.",
      requiredPassive: ["Gummy Star", "Star Saw"],
    recommendedGear: {
      mask: "Gummy Mask",
      bag: "Coconut Canister",
      boots: "Gummy Boots",
      guards: "Crimson/Cobalt Guards",
        belt: "Coco Belt"
    },
    composition: {
      "Vector Bee": 19,
      "Fuzzy Bee": 0,
      "Precise Bee": 8,
      "Tabby Bee": 1,
      "Bear Bee": 1,
      "Gummy Bee": 1,
      "Windy Bee": 1,
      "Digital Bee": 1,
      "Music Bee": 1,
      "Tadpole Bee": 3,
      "Baby Bee": 1,
      "Lion Bee": 1,
      "Carpenter Bee": 1,
      "Honey Bee": 2,
      "Shocked Bee": 1,
      "Commander Bee": 1,
      "Demo Bee": 1,
      "Hasty Bee": 1,
      "Stubborn Bee": 1,
      "Looker Bee": 1,
      "Brave Bee": 1,
      "Photon Bee": 1,
      "Puppy Bee": 1,
      "Basic Bee": 1
    }
  },
  {
    name: "Tad Alt (МАКРОС)",
    description: "Твинк для помощи основе. Генерирует пузыри и токены.",
    requiredPassive: ["Pop Star", "Scorching Star"],
    minHiveLevel: 16,
    recommendedGear: {
      mask: "Gummy Mask",
      bag: "Any", 
      boots: "Gummy Boots",
      guards: "Any",
      belt: "Honeycomb Belt"
    },
    composition: {
      "Tadpole Bee": 31,
      "Fuzzy Bee": 7,
      "Shocked Bee": 4,
      "Bucko Bee": 2,
      "Buoyant Bee": 1,
      "Ninja Bee": 1,
      "Hasty Bee": 1,
      "Stubborn Bee": 1,
      "Festive Bee": 1,
      "Gummy Bee": 1
    }
  },
  {
    name: "Tad Alt (ATLAS)",
    description: "Максимальный спам лягушками. Все Tadpole и Fuzzy должны быть одаренными. Также осуждаю читы, этот билд просто мои мысли не более. я люблю онетта",
    requiredPassive: ["Pop Star", "Scorching Star"],
    minHiveLevel: 16,
    recommendedGear: {
      mask: "Gummy Mask",
      bag: "Any",
      boots: "Gummy Boots",
      guards: "Any",
      belt: "Honeycomb Belt"
    },
    composition: {
      "Tadpole Bee": 37,
      "Buoyant Bee": 2,
      "Fuzzy Bee": 8,
      "Ninja Bee": 1,
      "Festive Bee": 1,
      "Gummy Bee": 1
    }
  }
  ,
  {
    name: "Ninja Bee Hive (Midgame)",
    description: "Mid-game сборка для развития аккаунта — фокус на Ninja Bee и наборе полезных одарённых слотов.",
    requiredPassive: [],
    recommendedGear: {
      mask: "Any",
      bag: "Any",
      boots: "Any",
      guards: "Any",
      belt: "Any"
    },
    composition: {
      "Ninja Bee": 18,
      "Diamond Bee": 5,
      "Music Bee": 4,
      "Baby Bee": 4,
      "Shy Bee": 1,
      "Exhausted Bee": 1,
      "Frosty Bee": 1,
      "Shocked Bee": 1,
      "Commander Bee": 1,
      "Bucko Bee": 1,
      "Bumble Bee": 1,
      "Stubborn Bee": 1,
      "Looker Bee": 1,
      "Bomber Bee": 1,
      "Cool Bee": 1,
      "Tabby Bee": 1,
      "Cobalt Bee": 1,
      "Gummy Bee": 1,
      "Vector Bee": 1,
      "Festive Bee": 1,
      "Basic Bee": 1
    }
  }
];

export const GEAR_OPTIONS = {
  masks: ["None", "Bubble Mask", "Fire Mask", "Gummy Mask", "Diamond Mask", "Demon Mask"],
  bags: ["None", "Porcelain Port-O-Hive", "Coconut Canister"],
  boots: ["None", "Gummy Boots", "Beekeeper's Boots", "Coconut Clogs"],
  belts: ["None", "Honeycomb Belt", "Petal Belt", "Coco Belt"],
  guards: ["None", "Elite Red/Blue Guards", "Riley/Bucko Guards", "Crimson/Cobalt Guards"],
  passives: ["None", "Pop Star", "Scorching Star", "Gummy Star", "Star Saw", "Star Shower", "Guiding Star"]
};

// New tool items
GEAR_OPTIONS['tools'] = ["None", "Porcelain Dipper", "Petal Wand", "Tide Popper", "Dark Scythe", "Gummyballer"];

export const HIVE_PRESETS = {
  "Bleached Hive (Новичок)": Array(50).fill(null).map((_, i) => {
    if (i < 5) return "Looker Bee";
    if (i < 15) return "Cool Bee";
    if (i < 25) return "Rad Bee";
    return "Basic Bee";
  }),
  "Midgame Mixed (35 пчел)": Array(50).fill(null).map((_, i) => {
    if (i > 35) return null; // Locked slots
    if (i === 0) return "Tabby Bee";
    if (i === 1) return "Windy Bee";
    if (i === 2) return "Vicious Bee";
    if (i === 3) return "Gummy Bee";
    if (i < 8) return "Music Bee";
    if (i < 12) return "Carpenter Bee";
    if (i < 15) return "Baby Bee";
    if (i < 20) return "Riley Bee";
    if (i < 25) return "Bucko Bee";
    return "Honey Bee";
  }),
  "Blue Hive Starter": Array(50).fill(null).map((_, i) => {
    if (i === 0) return "Tabby Bee";
    if (i < 10) return "Buoyant Bee";
    if (i < 15) return "Tadpole Bee";
    if (i < 19) return "Music Bee";
    if (i < 25) return "Bubble Bee";
    if (i < 30) return "Ninja Bee";
    if (i < 35) return "Frosty Bee"; 
    return null; 
  })
};

// Mid game presets for account progression
HIVE_PRESETS["Mid game (хайвы для развития аккаунта) - Ninja Bee Hive"] = (function(){
  const arr: (string | null)[] = [];
  // 18 Ninja Bee (first one gifted)
  arr.push("Ninja Bee (g)");
  for (let i = 1; i < 18; i++) arr.push("Ninja Bee");

  // 5 Diamond Bee
  for (let i = 0; i < 5; i++) arr.push("Diamond Bee");

  // 4 Music Bee
  for (let i = 0; i < 4; i++) arr.push("Music Bee");

  // 4 Baby Bee
  for (let i = 0; i < 4; i++) arr.push("Baby Bee");

  // Singles (gifted where specified)
  const singles = [
    "Shy Bee (g)",
    "Exhausted Bee (g)",
    "Frosty Bee (g)",
    "Shocked Bee (g)",
    "Commander Bee (g)",
    "Bucko Bee (g)",
    "Bumble Bee (g)",
    "Stubborn Bee (g)",
    "Looker Bee (g)",
    "Bomber Bee (g)",
    "Cool Bee (g)",
    "Tabby Bee (g)",
    "Cobalt Bee",
    "Gummy Bee (g)",
    "Vector Bee",
    "Festive Bee (g)",
    "Basic Bee (g)"
  ];

  singles.forEach(s => arr.push(s));

  // Fill remaining slots with null up to 50
  while (arr.length < 50) arr.push(null);

  return arr;
})();