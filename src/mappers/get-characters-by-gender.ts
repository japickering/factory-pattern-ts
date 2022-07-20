import { Characters } from "../data";
import { CharacterGender } from "../models/character-gender.model";

export function getCharacterByGender(race, gender) {
  if (!gender) {
    return Characters[race][CharacterGender.Male];
  }
  return Characters[race][gender];
}
