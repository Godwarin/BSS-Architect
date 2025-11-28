import { BeeDef, BuildTarget } from './types';

export const BEES: BeeDef[] = [
  // Event
  { name: 'Tabby Bee', rarity: 'Event', color: 'Colorless' },
  { name: 'Photon Bee', rarity: 'Event', color: 'Colorless' },
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
    requiredPassive: ["Pop Star"],
    recommendedGear: {
      mask: "Diamond Mask",
      bag: "Coconut Canister",
      boots: "Coconut Clogs",
      guards: "Crimson/Cobalt Guards",
      belt: "Petal Belt"
    },
    composition: {
      "Buoyant Bee": 18,
      "Tadpole Bee": 10,
      "Tabby Bee": 1,
      "Bear Bee": 1,
      "Gummy Bee": 1,
      "Vicious Bee": 1,
      "Windy Bee": 1,
      "Digital Bee": 1,
      "Music Bee": 4,
    }
  },
  {
    name: "Red Hive (Attack/Boost)",
    description: "Активный стиль игры. Требует Scorching Star. Дорогой билд, нужен высокий уровень прокачки.",
    requiredPassive: ["Scorching Star", "Star Saw"],
    recommendedGear: {
      mask: "Demon Mask",
      bag: "Coconut Canister",
      boots: "Coconut Clogs",
      guards: "Crimson/Cobalt Guards",
      belt: "Petal Belt"
    },
    composition: {
      "Precise Bee": 12,
      "Spicy Bee": 10,
      "Vector Bee": 4,
      "Tabby Bee": 1,
      "Bear Bee": 1,
      "Digital Bee": 1,
      "Photon Bee": 1,
      "Festive Bee": 1,
      "Crimson Bee": 1,
      "Baby Bee": 3,
      "Music Bee": 3
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
      belt: "Petal Belt"
    },
    composition: {
      "Vector Bee": 22,
      "Fuzzy Bee": 4,
      "Precise Bee": 4,
      "Tabby Bee": 1,
      "Bear Bee": 1,
      "Gummy Bee": 1,
      "Photon Bee": 1,
      "Windy Bee": 1,
      "Digital Bee": 1,
      "Festive Bee": 1,
      "Music Bee": 4
    }
  },
  {
    name: "Tad Alt (МАКРОС)",
    description: "Твинк для помощи основе. Генерирует пузыри и токены.",
    requiredPassive: ["Pop Star", "Scorching Star"],
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
    description: "Максимальный спам лягушками. Все Tadpole и Fuzzy должны быть одаренными.",
    requiredPassive: ["Pop Star", "Scorching Star"],
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
];

export const GEAR_OPTIONS = {
  masks: ["None", "Honey Mask", "Bubble Mask", "Fire Mask", "Gummy Mask", "Diamond Mask", "Demon Mask"],
  bags: ["None", "Porcelain Port-O-Hive", "Mountain Top Bag", "Coconut Canister"],
  boots: ["None", "Gummy Boots", "Coconut Clogs", "Coco Boots (Test)"],
  belts: ["None", "Honeycomb Belt", "Petal Belt", "Coco Belt"],
  guards: ["None", "Riley/Bucko Guards", "Crimson/Cobalt Guards", "Elite Red/Blue Guards"],
  passives: ["None", "Pop Star", "Scorching Star", "Gummy Star", "Star Saw", "Star Shower", "Guiding Star"]
};

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
    if (i === 1) return "Photon Bee";
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