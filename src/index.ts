// models
import { ICharacater } from "./models/character.model";
import { CharacterRaceEnum } from "./models/character-race-enum.model";
import { CharacterGender } from "./models/character-gender.model";

// classes
import { Altmer } from "./classes/altmer.class";
import { Argonian } from "./classes/argonian.class";
import { Bosmer } from "./classes/bosmer.class";
import { Breton } from "./classes/breton.class";
import { Dunmer } from "./classes/dunmer.class";
import { Imperial } from "./classes/imperial.class";
import { Khajiit } from "./classes/khajiit.class";
import { Nord } from "./classes/nord.class";
import { Orc } from "./classes/orc.class";
import { Redguard } from "./classes/redguard.class";

import { Character } from "./classes/character.class";

export class CharacterFactory {
  createCharacter(type: CharacterRaceEnum): ICharacater {
    switch (type) {
      case CharacterRaceEnum.Altmer:
        return new Altmer();
      case CharacterRaceEnum.Argonian:
        return new Argonian();
      case CharacterRaceEnum.Bosmer:
        return new Bosmer();
      case CharacterRaceEnum.Breton:
        return new Breton();
      case CharacterRaceEnum.Dunmer:
        return new Dunmer();
      case CharacterRaceEnum.Imperial:
        return new Imperial();
      case CharacterRaceEnum.Khajiit:
        return new Khajiit();
      case CharacterRaceEnum.Nord:
        return new Nord();
      case CharacterRaceEnum.Orc:
        return new Orc();
      case CharacterRaceEnum.Redguard:
        return new Redguard();
      default:
        return new Character(CharacterRaceEnum.Altmer);
    }
  }
}

let factory = new CharacterFactory();

let altmer = factory.createCharacter(CharacterRaceEnum.Altmer);
let argonian = factory.createCharacter(CharacterRaceEnum.Argonian);
let bosmer = factory.createCharacter(CharacterRaceEnum.Bosmer);
let breton = factory.createCharacter(CharacterRaceEnum.Breton);
let dunmer = factory.createCharacter(CharacterRaceEnum.Dunmer);
let imperial = factory.createCharacter(CharacterRaceEnum.Imperial);
let khajiit = factory.createCharacter(CharacterRaceEnum.Khajiit);
let nord = factory.createCharacter(CharacterRaceEnum.Nord);
let orc = factory.createCharacter(CharacterRaceEnum.Orc);
let redguard = factory.createCharacter(CharacterRaceEnum.Redguard);
let character = factory.createCharacter("character");

console.log("Altmer: ", altmer.getCharacter(CharacterGender.Female));
console.log("Argonian: ", argonian.getCharacter());
console.log("Bosmer: ", bosmer.getCharacter(CharacterGender.Female));
console.log("Breton: ", breton.getCharacter(CharacterGender.Female));
console.log("Dunmer: ", dunmer.getCharacter());
console.log("Imperial: ", imperial.getCharacter(CharacterGender.Female));
console.log("Khajiit: ", khajiit.getCharacter());
console.log("Nord: ", nord.getCharacter(CharacterGender.Female));
console.log("Orc: ", orc.getCharacter());
console.log("Redguard: ", redguard.getCharacter(CharacterGender.Male));
console.log("Character: ", character.getCharacter());
