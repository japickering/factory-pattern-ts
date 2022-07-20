import { ICharacterRace } from "../models/character-race.model";
import { ICharacater } from "../models/character.model";
import { CharacterGender } from "../models/character-gender.model";
import { CharacterRaceEnum } from "../models/character-race-enum.model";
import { getCharacterByGender } from "../mappers/get-characters-by-gender";

export class Argonian implements ICharacater {
  getCharacter(gender: CharacterGender): ICharacterRace {
    const character = getCharacterByGender(CharacterRaceEnum.Argonian, gender);
    return character;
  }
}
