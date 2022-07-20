import { CharacterRaceEnum } from "./models/character-race-enum.model";
import { ICharacterRaceGender } from "./models/character-race.model";

export const Characters: {
  [key in CharacterRaceEnum]: ICharacterRaceGender
} = {
  [CharacterRaceEnum.Altmer]: {
    Male: {
      name: "Altmer",
      gender: "Male",
      strength: 30,
      intelligence: 50,
      willpower: 40,
      agility: 40,
      speed: 30,
      endurance: 40,
      personality: 40,
      luck: 50,
      skills: {
        alchemy: 5,
        alteration: 10,
        conjuration: 5,
        destruction: 10,
        illusion: 5,
        mysticism: 10
      }
    },
    Female: {
      name: "Altmer",
      gender: "Female",
      strength: 30,
      intelligence: 50,
      willpower: 40,
      agility: 40,
      speed: 40,
      endurance: 30,
      personality: 40,
      luck: 50,
      skills: {
        alchemy: 5,
        alteration: 10,
        conjuration: 5,
        destruction: 10,
        illusion: 5,
        mysticism: 10
      }
    }
  },
  [CharacterRaceEnum.Argonian]: {
    Male: {
      name: "Argonian",
      gender: "Male",
      strength: 40,
      intelligence: 40,
      willpower: 30,
      agility: 50,
      speed: 50,
      endurance: 30,
      personality: 30,
      luck: 50,
      skills: {
        alchemy: 5,
        athletics: 10,
        blade: 5,
        handToHand: 5,
        illusion: 5,
        mysticism: 5,
        security: 10
      }
    },
    Female: {
      name: "Argonian",
      gender: "Female",
      strength: 40,
      intelligence: 50,
      willpower: 40,
      agility: 40,
      speed: 40,
      endurance: 30,
      personality: 30,
      luck: 50,
      skills: {
        alchemy: 5,
        athletics: 10,
        blade: 5,
        handToHand: 5,
        illusion: 5,
        mysticism: 5,
        security: 10
      }
    }
  },
  [CharacterRaceEnum.Bosmer]: {
    Male: {
      name: "Bosmer",
      gender: "Male",
      strength: 30,
      intelligence: 40,
      willpower: 30,
      agility: 50,
      speed: 50,
      endurance: 40,
      personality: 30,
      luck: 50,
      skills: {
        acrobatics: 5,
        alchemy: 10,
        alteration: 5,
        lightArmor: 5,
        marksman: 10,
        illusion: 5,
        mysticism: 10
      }
    },
    Female: {
      name: "Bosmer",
      gender: "Female",
      strength: 30,
      intelligence: 40,
      willpower: 30,
      agility: 50,
      speed: 50,
      endurance: 30,
      personality: 40,
      luck: 50,
      skills: {
        acrobatics: 5,
        alchemy: 10,
        alteration: 5,
        lightArmor: 5,
        marksman: 10,
        illusion: 5,
        mysticism: 10
      }
    }
  },
  [CharacterRaceEnum.Breton]: {
    Male: {
      name: "Breton",
      gender: "Male",
      strength: 40,
      intelligence: 40,
      willpower: 50,
      agility: 30,
      speed: 30,
      endurance: 30,
      personality: 40,
      luck: 50,
      skills: {
        alchemy: 5,
        alteration: 5,
        conjuration: 10,
        restoration: 10,
        illusion: 5,
        mysticism: 10
      }
    },
    Female: {
      name: "Breton",
      gender: "Female",
      strength: 30,
      intelligence: 40,
      willpower: 50,
      agility: 30,
      speed: 40,
      endurance: 30,
      personality: 40,
      luck: 50,
      skills: {
        alchemy: 5,
        alteration: 5,
        conjuration: 10,
        restoration: 10,
        illusion: 5,
        mysticism: 10
      }
    }
  },
  [CharacterRaceEnum.Dunmer]: {
    Male: {
      name: "Dunmer",
      gender: "Male",
      strength: 40,
      intelligence: 40,
      willpower: 30,
      agility: 40,
      speed: 50,
      endurance: 40,
      personality: 30,
      luck: 50,
      skills: {
        athletics: 5,
        blade: 10,
        blunt: 5,
        destruction: 10,
        lightArmor: 5,
        marksman: 5,
        sneak: 5
      }
    },
    Female: {
      name: "Dunmer",
      gender: "Female",
      strength: 40,
      intelligence: 40,
      willpower: 30,
      agility: 40,
      speed: 50,
      endurance: 30,
      personality: 40,
      luck: 50,
      skills: {
        athletics: 5,
        blade: 10,
        blunt: 5,
        destruction: 10,
        lightArmor: 5,
        marksman: 5,
        sneak: 5
      }
    }
  },
  [CharacterRaceEnum.Imperial]: {
    Male: {
      name: "Imperial",
      gender: "Male",
      strength: 40,
      intelligence: 40,
      willpower: 30,
      agility: 30,
      speed: 40,
      endurance: 40,
      personality: 50,
      luck: 50,
      skills: {
        blade: 5,
        blunt: 5,
        handToHand: 5,
        heavyArmor: 10,
        mercantile: 10,
        speechcraft: 10
      }
    },
    Female: {
      name: "Imperial",
      gender: "Female",
      strength: 40,
      intelligence: 40,
      willpower: 40,
      agility: 30,
      speed: 30,
      endurance: 40,
      personality: 50,
      luck: 50,
      skills: {
        blade: 5,
        blunt: 5,
        handToHand: 5,
        heavyArmor: 10,
        mercantile: 10,
        speechcraft: 10
      }
    }
  },
  [CharacterRaceEnum.Khajiit]: {
    Male: {
      name: "Khajiit",
      gender: "Male",
      strength: 40,
      intelligence: 40,
      willpower: 30,
      agility: 50,
      speed: 40,
      endurance: 30,
      personality: 40,
      luck: 50,
      skills: {
        acrobatics: 10,
        athletics: 5,
        blade: 5,
        handToHand: 10,
        lightArmor: 5,
        security: 5,
        sneak: 5
      }
    },
    Female: {
      name: "Khajiit",
      gender: "Female",
      strength: 30,
      intelligence: 40,
      willpower: 30,
      agility: 50,
      speed: 40,
      endurance: 40,
      personality: 40,
      luck: 50,
      skills: {
        acrobatics: 10,
        athletics: 5,
        blade: 5,
        handToHand: 10,
        lightArmor: 5,
        security: 5,
        sneak: 5
      }
    }
  },
  [CharacterRaceEnum.Nord]: {
    Male: {
      name: "Nord",
      gender: "Male",
      strength: 50,
      intelligence: 30,
      willpower: 30,
      agility: 40,
      speed: 40,
      endurance: 50,
      personality: 30,
      luck: 50,
      skills: {
        armorer: 5,
        blade: 10,
        block: 5,
        blunt: 10,
        heavyArmor: 10,
        restoration: 5
      }
    },
    Female: {
      name: "Nord",
      gender: "Female",
      strength: 50,
      intelligence: 30,
      willpower: 40,
      agility: 40,
      speed: 40,
      endurance: 40,
      personality: 30,
      luck: 50,
      skills: {
        armorer: 5,
        blade: 10,
        block: 5,
        blunt: 10,
        heavyArmor: 10,
        restoration: 5
      }
    }
  },
  [CharacterRaceEnum.Orc]: {
    Male: {
      name: "Orc",
      gender: "Male",
      strength: 45,
      intelligence: 30,
      willpower: 50,
      agility: 35,
      speed: 30,
      endurance: 50,
      personality: 30,
      luck: 50,
      skills: {
        armorer: 10,
        block: 10,
        blunt: 10,
        handToHand: 5,
        heavyArmor: 10
      }
    },
    Female: {
      name: "Orc",
      gender: "Female",
      strength: 45,
      intelligence: 40,
      willpower: 45,
      agility: 35,
      speed: 30,
      endurance: 50,
      personality: 25,
      luck: 50,
      skills: {
        armorer: 10,
        block: 10,
        blunt: 10,
        handToHand: 5,
        heavyArmor: 10
      }
    }
  },
  [CharacterRaceEnum.Redguard]: {
    Male: {
      name: "Redguard",
      gender: "Male",
      strength: 50,
      intelligence: 30,
      willpower: 30,
      agility: 40,
      speed: 40,
      endurance: 50,
      personality: 30,
      luck: 50,
      skills: {
        athletics: 10,
        blade: 10,
        blunt: 10,
        heavyArmor: 5,
        lightArmor: 5,
        mercantile: 10
      }
    },
    Female: {
      name: "Redguard",
      gender: "Female",
      strength: 40,
      intelligence: 30,
      willpower: 30,
      agility: 40,
      speed: 40,
      endurance: 50,
      personality: 40,
      luck: 50,
      skills: {
        athletics: 10,
        blade: 10,
        blunt: 10,
        heavyArmor: 5,
        lightArmor: 5,
        mercantile: 10
      }
    }
  }
};
