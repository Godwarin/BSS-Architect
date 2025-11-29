export type Rarity = 'Rare' | 'Epic' | 'Legendary' | 'Mythic' | 'Event' | 'Common';
export type Color = 'Colorless' | 'Red' | 'Blue';

export interface BeeDef {
  name: string;
  rarity: Rarity;
  color: Color;
}

export interface HiveSlot {
  id: number;
  bee: string | null; // Bee name
  gifted: boolean;
}

export interface BuildTarget {
  name: string;
  description: string;
  composition: Record<string, number>; // "Buoyant Bee": 18
  requiredPassive: string[];
  recommendedGear?: {
    mask?: string;
    boots?: string;
    belt?: string;
    guards?: string;
    bag?: string;
  };
}

export interface GearState {
  mask: string;
  bag: string;
  boots: string;
  belt: string;
  guards: string;
  ssa_passive_1: string;
  ssa_passive_2: string;
}

export type Tab = 'hive' | 'analysis' | 'guide';