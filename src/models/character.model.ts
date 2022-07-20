import { ICharacterRace } from "./character-race.model";
import { CharacterGender } from "./character-gender.model";

export interface ICharacater {
  getCharacter(gender?: CharacterGender): ICharacterRace;
}
