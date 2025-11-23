// TypeScript interfaces for Fallout Lore Artifact

export interface FalloutEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  category: 'pre-war' | 'war' | 'post-war' | 'vault' | 'faction' | 'technology';
  relatedFactions?: string[];
  relatedLocations?: string[];
}

export interface Vault {
  id: string;
  number: number;
  name: string;
  location: string;
  coordinates?: [number, number];
  experiment: string;
  status: 'sealed' | 'open' | 'destroyed' | 'unknown';
  population: number;
  overseer: string;
  outcome: string;
  notableResidents?: string[];
  year: number;
}

export interface Faction {
  id: string;
  name: string;
  acronym?: string;
  founded: number;
  leader: string;
  headquarters: string;
  ideology: string;
  description: string;
  goals: string[];
  status: 'active' | 'defunct' | 'unknown';
  allies: string[];
  enemies: string[];
  notableMembers?: string[];
}

export interface Location {
  id: string;
  name: string;
  type: 'settlement' | 'vault' | 'military-base' | 'ruins' | 'landmark';
  coordinates: [number, number];
  region: string;
  description: string;
  founded?: number;
  population?: number;
  controlledBy?: string;
  status: 'inhabited' | 'abandoned' | 'destroyed';
}

export interface Technology {
  id: string;
  name: string;
  category: 'weapon' | 'armor' | 'robot' | 'power-source' | 'medical' | 'other';
  description: string;
  manufacturer: string;
  yearDeveloped?: number;
  rarity: 'common' | 'uncommon' | 'rare' | 'legendary';
  image?: string;
}

export interface Character {
  id: string;
  name: string;
  title?: string;
  affiliation: string;
  born?: number;
  died?: number;
  biography: string;
  achievements: string[];
  location?: string;
}

export interface FalloutData {
  timeline: FalloutEvent[];
  vaults: Vault[];
  factions: Faction[];
  locations: Location[];
  technologies: Technology[];
  characters: Character[];
}
