export interface ISkills {
  alchemy?: number;
  alteration?: number;
  acrobatics?: number;
  conjuration?: number;
  destruction?: number;
  illusion?: number;
  mysticism?: number;
  athletics?: number;
  blade?: number;
  handToHand?: number;
  security?: number;
  restoration?: number;
  lightArmor?: number;
  marksman?: number;
  mercantile?: number;
  blunt?: number;
  heavyArmor?: number;
  armorer?: number;
  block?: number;
  sneak?: number;
  speechcraft?: number;
}

export interface ICharacterRace {
  name: string;
  gender: string;
  strength: number;
  intelligence: number;
  willpower: number;
  agility: number;
  speed: number;
  endurance: number;
  personality: number;
  luck: number;
  skills: ISkills;
}

export interface ICharacterRaceGender {
  Male: ICharacterRace;
  Female: ICharacterRace;
}
