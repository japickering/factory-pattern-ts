import { ICharacterRace } from "../models/character-race.model";
import { ICharacater } from "../models/character.model";
import { CharacterGender } from "../models/character-gender.model";
import { CharacterRaceEnum } from "../models/character-race-enum.model";
import { getCharacterByGender } from "../mappers/get-characters-by-gender";

export class Character implements ICharacater {
  race: CharacterRaceEnum;
  gender: CharacterGender;
  constructor(race, gender?) {
    this.race = race;
    this.gender = gender;
  }
  getCharacter(gender: CharacterGender): ICharacterRace {
    const character = getCharacterByGender(this.race, this.gender);
    return character;
  }
}
