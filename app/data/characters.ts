import { Character } from '../types';

export const goku: Character = {
  id: 1,
  name: "Son Goku",
  race: "Saiyan",
  gender: "Male",
  description: "Originally named Kakarot, Goku is a Saiyan warrior who was sent to Earth as an infant. Found and adopted by Grandpa Gohan, Goku grew up to become Earth's greatest defender and the informal leader of the Z Fighters. His pure heart, exceptional battle instinct, and relentless drive to improve have helped him become one of the most powerful warriors in the universe. Despite his tremendous power, Goku maintains a childlike innocence and a pure heart, always seeking to protect the innocent and face stronger opponents to test his limits.",
  biography: {
    birthDate: "Age 737",
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    occupation: ["Martial Artist", "Farmer", "Radish Farmer"],
    family: {
      father: "Bardock",
      mother: "Gine",
      brother: "Raditz",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten",
      granddaughter: "Pan",
      father_in_law: "Ox-King",
      mentors: "Grandpa Gohan, Master Roshi, Korin, Mr. Popo, Kami, King Kai, Whis"
    },
    affiliations: [
      "Z Fighters",
      "Turtle School",
      "Team Universe 7",
      "Saiyan Army (formerly)"
    ],
    status: "Alive"
  },
  powerLevel: {
    base: 10000,
    transformations: {
      "Great Ape": 100000,
      "Kaio-ken": 20000,
      "Kaio-ken x2": 40000,
      "Kaio-ken x3": 60000,
      "Kaio-ken x4": 80000,
      "Kaio-ken x10": 200000,
      "Kaio-ken x20": 400000,
      "False Super Saiyan": 450000,
      "Super Saiyan": 500000,
      "Ascended Super Saiyan": 750000,
      "Ultra Super Saiyan": 850000,
      "Full Power Super Saiyan": 900000,
      "Super Saiyan 2": 1000000,
      "Super Saiyan 3": 4000000,
      "Super Saiyan God": 20000000,
      "Super Saiyan Blue": 100000000,
      "Super Saiyan Blue Kaio-ken": 200000000,
      "Super Saiyan Blue Evolution": 300000000,
      "Ultra Instinct -Sign-": 500000000,
      "Ultra Instinct": 1000000000
    }
  },
  techniques: {
    Kamehameha: {
      description: "A powerful ki-based beam attack that has become Goku's signature technique learned from Master Roshi. By cupping his hands at his side, Goku concentrates his ki into a single point and releases it in a powerful beam.",
      type: "signature"
    },
    "Spirit Bomb": {
      description: "A powerful technique taught by King Kai that gathers energy from all living beings. The collected energy forms a massive sphere that can be used against evil beings.",
      type: "offensive"
    },
    "Instant Transmission": {
      description: "A technique learned from the Yardrats that allows Goku to teleport instantly to any location by sensing ki signatures.",
      type: "supportive"
    },
    "Dragon Fist": {
      description: "A powerful technique where Goku concentrates his ki into his fist, creating a golden dragon-shaped aura that pierces through opponents.",
      type: "offensive"
    },
    "Solar Flare": {
      description: "A technique learned from Tien that creates an intensely bright light to blind opponents temporarily.",
      type: "defensive"
    },
    "Kaio-ken": {
      description: "A technique learned from King Kai that multiplies Goku's power level but puts immense strain on his body.",
      type: "supportive"
    },
    "Spirit Shot": {
      description: "A powerful ki blast using both hands, often used in combination with other techniques.",
      type: "offensive"
    },
    "After Image Technique": {
      description: "Creates multiple false images of the user by moving at high speed, confusing opponents.",
      type: "defensive"
    },
    "Energy Shield": {
      description: "A barrier of ki that can protect from attacks.",
      type: "defensive"
    },
    "Ultra Instinct": {
      description: "A state of mind where the body moves and reacts automatically without conscious thought.",
      type: "signature"
    },
    "Destructo Disc": {
      description: "A sharp disc of ki that can slice through almost anything, learned from Krillin.",
      type: "offensive"
    },
    "Spirit Gun": {
      description: "A focused beam of ki shot from the index finger.",
      type: "offensive"
    }
  },
  transformations: {
    "Great Ape": {
      description: "A giant ape transformation triggered by looking at a full moon, increasing size and power dramatically.",
      firstAppearance: {
        manga: "Chapter 21",
        anime: "Dragon Ball Episode 13"
      },
      multiplier: 10
    },
    "Kaio-ken": {
      description: "A power-up technique that multiplies Goku's power level but puts strain on his body.",
      firstAppearance: {
        manga: "Chapter 226",
        anime: "Dragon Ball Z Episode 31"
      }
    },
    "False Super Saiyan": {
      description: "An incomplete version of the Super Saiyan transformation, with blank eyes and a golden aura.",
      firstAppearance: {
        anime: "Dragon Ball Z: Lord Slug"
      },
      multiplier: 45
    },
    "Super Saiyan": {
      description: "A legendary transformation first triggered by Krillin's death, characterized by golden hair and green eyes.",
      firstAppearance: {
        manga: "Chapter 317",
        anime: "Dragon Ball Z Episode 95"
      },
      multiplier: 50
    },
    "Ascended Super Saiyan": {
      description: "A more powerful version of Super Saiyan with increased muscle mass.",
      firstAppearance: {
        manga: "Chapter 388",
        anime: "Dragon Ball Z Episode 155"
      },
      multiplier: 75
    },
    "Ultra Super Saiyan": {
      description: "A further ascended form with extreme muscle mass but reduced speed.",
      firstAppearance: {
        manga: "Chapter 389",
        anime: "Dragon Ball Z Episode 156"
      },
      multiplier: 85
    },
    "Full Power Super Saiyan": {
      description: "The mastered state of Super Saiyan, allowing prolonged use without energy drain.",
      firstAppearance: {
        manga: "Chapter 390",
        anime: "Dragon Ball Z Episode 156"
      },
      multiplier: 90
    },
    "Super Saiyan 2": {
      description: "An ascended form of Super Saiyan with lightning aura and increased power.",
      firstAppearance: {
        anime: "Dragon Ball Z Episode 229"
      },
      multiplier: 100
    },
    "Super Saiyan 3": {
      description: "A powerful transformation with extreme energy consumption and distinctive long hair.",
      firstAppearance: {
        manga: "Chapter 474",
        anime: "Dragon Ball Z Episode 245"
      },
      multiplier: 400
    },
    "Super Saiyan God": {
      description: "A divine transformation achieved through a ritual requiring 5 righteous Saiyans.",
      firstAppearance: {
        anime: "Dragon Ball Z: Battle of Gods"
      },
      multiplier: 2000
    },
    "Super Saiyan Blue": {
      description: "A combination of Super Saiyan God and Super Saiyan, offering perfect ki control.",
      firstAppearance: {
        manga: "Chapter 5 (DBS)",
        anime: "Dragon Ball Super Episode 24"
      },
      multiplier: 5000
    },
    "Super Saiyan Blue Kaio-ken": {
      description: "The combination of Super Saiyan Blue with Kaio-ken, multiplying its power.",
      firstAppearance: {
        anime: "Dragon Ball Super Episode 39"
      }
    },
    "Ultra Instinct -Sign-": {
      description: "An incomplete version of Ultra Instinct, focusing mainly on automatic dodging.",
      firstAppearance: {
        anime: "Dragon Ball Super Episode 110"
      }
    },
    "Ultra Instinct": {
      description: "The complete Ultra Instinct form, allowing both automatic attack and defense.",
      firstAppearance: {
        anime: "Dragon Ball Super Episode 129"
      }
    }
  },
  imageUrl: "/images/goku.jpg"
};

export const greatApe: Character = {
  id: 2,
  name: "Great Ape Goku",
  race: "Saiyan",
  gender: "Male",
  description: "The Great Ape form of Goku, a giant, powerful primate transformation that Saiyans with tails can achieve when exposed to Blutz Waves from a full moon.",
  biography: {
    height: "26 meters",
    weight: "Unknown",
    status: "Transformation",
    affiliations: ["Earth's Warriors"],
  },
  powerLevel: {
    base: 100000, // 10x base Goku's power level
    transformations: {} // Great Ape doesn't have additional transformations
  },
  techniques: {
    "Mouth Energy Wave": {
      description: "A powerful beam of energy fired from the mouth",
      type: "offensive"
    },
    "Crushing Grip": {
      description: "Uses enormous hands to crush opponents or buildings",
      type: "offensive"
    }
  },
  transformations: {}, // Great Ape is already a transformation
  imageUrl: "/images/great-ape-goku.jpg"
};

export const kaiokenGoku: Character = {
  id: 3,
  name: "Kaio-ken Goku",
  race: "Saiyan",
  gender: "Male",
  description: "Goku using the Kaio-ken technique, learned from King Kai in the Other World. This powerful technique multiplies Goku's power level but puts immense strain on his body.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Powered-up state",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 20000, // 2x base Goku's power level (Kaio-ken)
    transformations: {
      "Kaio-ken x2": 40000,
      "Kaio-ken x3": 60000,
      "Kaio-ken x4": 80000,
      "Kaio-ken x10": 200000,
      "Kaio-ken x20": 400000
    }
  },
  techniques: {
    "Kaio-ken Attack": {
      description: "A rush attack performed while using the Kaio-ken, dramatically increasing its power.",
      type: "signature"
    },
    "Kaio-ken Finish": {
      description: "A powerful kick followed by an energy wave, enhanced by the Kaio-ken.",
      type: "offensive"
    },
    "Kaio-ken Kamehameha": {
      description: "The Kamehameha Wave amplified by the power of the Kaio-ken.",
      type: "signature"
    },
    "Double Kaio-ken": {
      description: "Rapidly switching between different Kaio-ken multipliers for unpredictable attacks.",
      type: "offensive"
    }
  },
  transformations: {
    "Kaio-ken x2": {
      description: "Doubles Goku's power level, significantly increasing the strain on his body.",
      firstAppearance: {
        manga: "Chapter 229",
        anime: "Dragon Ball Z Episode 31"
      },
      multiplier: 2
    },
    "Kaio-ken x3": {
      description: "Triples Goku's power level, creating intense strain on his body.",
      firstAppearance: {
        manga: "Chapter 230",
        anime: "Dragon Ball Z Episode 31"
      },
      multiplier: 3
    },
    "Kaio-ken x4": {
      description: "Quadruples Goku's power level, pushing his body to its absolute limit.",
      firstAppearance: {
        manga: "Chapter 231",
        anime: "Dragon Ball Z Episode 31"
      },
      multiplier: 4
    },
    "Kaio-ken x10": {
      description: "Multiplies Goku's power level by ten, risking severe damage to his body.",
      firstAppearance: {
        anime: "Dragon Ball Z Episode 87"
      },
      multiplier: 10
    },
    "Kaio-ken x20": {
      description: "The maximum Kaio-ken multiplier Goku achieved in his base form, extremely dangerous to use.",
      firstAppearance: {
        anime: "Dragon Ball Z Episode 87"
      },
      multiplier: 20
    }
  },
  imageUrl: "/images/kaioken-goku.jpg"
};

export const kaiokenX2Goku: Character = {
  id: 4,
  name: "Kaio-ken x2 Goku",
  race: "Saiyan",
  gender: "Male",
  description: "Goku pushing the Kaio-ken technique to double his power, despite the increased strain on his body. This form was first used against Vegeta during their initial battle on Earth.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Powered-up state",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 40000, // 4x base Goku's power level (Kaio-ken x2)
    transformations: {
      "Kaio-ken x3": 60000,
      "Kaio-ken x4": 80000
    }
  },
  techniques: {
    "Double Kaio-ken Attack": {
      description: "A rush attack with doubled power, putting extreme strain on Goku's body.",
      type: "signature"
    },
    "Double Kaio-ken Kamehameha": {
      description: "The Kamehameha Wave amplified by Kaio-ken x2.",
      type: "signature"
    },
    "Continuous Energy Bullet": {
      description: "A rapid-fire ki blast attack enhanced by Kaio-ken x2.",
      type: "offensive"
    },
    "Double Impact Strike": {
      description: "A combination of physical strikes with doubled power.",
      type: "offensive"
    }
  },
  transformations: {
    "Kaio-ken x3": {
      description: "Further increasing the Kaio-ken multiplier to triple power.",
      firstAppearance: {
        manga: "Chapter 230",
        anime: "Dragon Ball Z Episode 31"
      },
      multiplier: 1.5 // relative to x2 base
    },
    "Kaio-ken x4": {
      description: "Pushing the Kaio-ken to quadruple power, extremely dangerous.",
      firstAppearance: {
        manga: "Chapter 231",
        anime: "Dragon Ball Z Episode 31"
      },
      multiplier: 2 // relative to x2 base
    }
  },
  imageUrl: "/images/kaioken-x2-goku.jpg"
};

export const kaiokenX3Goku: Character = {
  id: 5,
  name: "Kaio-ken x3 Goku",
  race: "Saiyan",
  gender: "Male",
  description: "Goku pushing the Kaio-ken technique to triple his power. This form was used during the desperate battle against Vegeta, marking the first time Goku tripled his power despite the extreme risk.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Powered-up state",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 60000, // 6x base Goku's power level (Kaio-ken x3)
    transformations: {
      "Kaio-ken x4": 80000
    }
  },
  techniques: {
    "Triple Kaio-ken Attack": {
      description: "A rush attack with tripled power, causing severe strain on Goku's body.",
      type: "signature"
    },
    "Triple Kaio-ken Kamehameha": {
      description: "The Kamehameha Wave amplified by Kaio-ken x3, reaching devastating power levels.",
      type: "signature"
    },
    "Triple Strike Combo": {
      description: "A combination attack with tripled power, overwhelming opponents with speed and power.",
      type: "offensive"
    },
    "Triple Energy Barrage": {
      description: "Multiple energy attacks fired in rapid succession with tripled power.",
      type: "offensive"
    }
  },
  transformations: {
    "Kaio-ken x4": {
      description: "The ultimate Kaio-ken multiplier used against Vegeta, pushing beyond triple power.",
      firstAppearance: {
        manga: "Chapter 231",
        anime: "Dragon Ball Z Episode 31"
      },
      multiplier: 1.33 // relative to x3 base
    }
  },
  imageUrl: "/images/kaioken-x3-goku.jpg"
};

export const kaiokenX4Goku: Character = {
  id: 6,
  name: "Kaio-ken x4 Goku",
  race: "Saiyan",
  gender: "Male",
  description: "Goku pushing the Kaio-ken technique to its absolute limit, quadrupling his power. This was the maximum multiplier Goku could achieve in his battle against Vegeta, and using it put him at risk of complete bodily destruction.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Powered-up state",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 80000, // 8x base Goku's power level (Kaio-ken x4)
    transformations: {} // No further Kaio-ken transformations during Saiyan Saga
  },
  techniques: {
    "Quadruple Kaio-ken Attack": {
      description: "A rush attack with quadrupled power, putting Goku's body under extreme stress.",
      type: "signature"
    },
    "Quadruple Kaio-ken Kamehameha": {
      description: "The ultimate version of the Kaio-ken Kamehameha used against Vegeta, with power multiplied by four.",
      type: "signature"
    },
    "Maximum Power Strike": {
      description: "A devastating physical attack that utilizes the full power of the Kaio-ken x4.",
      type: "offensive"
    },
    "Quadruple Spirit Burst": {
      description: "A powerful ki explosion that radiates from Goku's body with quadrupled force.",
      type: "offensive"
    }
  },
  transformations: {}, // No further transformations at this level during the Saiyan Saga
  imageUrl: "/images/kaioken-x4-goku.jpg"
};

export const kaiokenX10Goku: Character = {
  id: 7,
  name: "Kaio-ken x10 Goku",
  race: "Saiyan",
  gender: "Male",
  description: "Goku pushing the Kaio-ken technique to an unprecedented level, multiplying his power by ten. This form was first used against Frieza on Namek, representing a massive leap in Goku's mastery of the technique.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Powered-up state",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 200000, // 20x base Goku's power level (Kaio-ken x10)
    transformations: {
      "Kaio-ken x20": 400000
    }
  },
  techniques: {
    "Ten-Fold Kaio-ken Attack": {
      description: "A devastating rush attack with power multiplied by ten, causing extreme strain on Goku's body.",
      type: "signature"
    },
    "Ten-Fold Kaio-ken Kamehameha": {
      description: "An immensely powerful version of the Kamehameha Wave amplified by Kaio-ken x10, used against Frieza.",
      type: "signature"
    },
    "Maximum Power Impact": {
      description: "A powerful physical strike that channels the full force of the ten-fold Kaio-ken.",
      type: "offensive"
    },
    "Decuple Spirit Burst": {
      description: "A massive ki explosion that releases energy in all directions with ten times the normal force.",
      type: "offensive"
    }
  },
  transformations: {
    "Kaio-ken x20": {
      description: "The absolute limit of the Kaio-ken technique in the Frieza Saga, doubling even the tremendous power of Kaio-ken x10.",
      firstAppearance: {
        anime: "Dragon Ball Z Episode 87"
      },
      multiplier: 2 // relative to x10 base
    }
  },
  imageUrl: "/images/kaioken-x10-goku.jpg"
};

export const kaiokenX20Goku: Character = {
  id: 8,
  name: "Kaio-ken x20 Goku",
  race: "Saiyan",
  gender: "Male",
  description: "Goku pushing the Kaio-ken technique to its absolute maximum, multiplying his power by twenty. This form represents the pinnacle of Goku's mastery over the Kaio-ken technique, used as a last resort against Frieza on Namek.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Powered-up state",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 400000, // 40x base Goku's power level (Kaio-ken x20)
    transformations: {} // No further transformations at this level
  },
  techniques: {
    "Twenty-Fold Kaio-ken Attack": {
      description: "The ultimate Kaio-ken rush attack with power multiplied by twenty, putting catastrophic strain on Goku's body.",
      type: "signature"
    },
    "Twenty-Fold Kaio-ken Kamehameha": {
      description: "The most powerful version of the Kaio-ken Kamehameha, amplified twenty times and used as a final trump card against Frieza.",
      type: "signature"
    },
    "Maximum Spirit Strike": {
      description: "A devastating physical attack that channels the full might of the twenty-fold Kaio-ken.",
      type: "offensive"
    },
    "Ultimate Spirit Burst": {
      description: "The strongest ki explosion possible with the Kaio-ken, releasing energy with twenty times the normal force.",
      type: "offensive"
    }
  },
  transformations: {}, // This is the peak of Kaio-ken, no further transformations
  imageUrl: "/images/kaioken-x20-goku.jpg"
};

export const falseSuperSaiyanGoku: Character = {
  id: 9,
  name: "False Super Saiyan Goku",
  race: "Saiyan",
  gender: "Male",
  description: "An incomplete version of the Super Saiyan transformation, achieved by Goku during his fight against Lord Slug. This form is characterized by blank pupils, a golden aura, and slightly spikier hair, representing Goku's first step towards the true Super Saiyan transformation.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Incomplete Transformation",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 450000, // 45x base Goku's power level
    transformations: {} // No further transformations in this state
  },
  techniques: {
    "False Super Saiyan Strike": {
      description: "A powerful rushing attack enhanced by the False Super Saiyan state's increased power.",
      type: "signature"
    },
    "Rage Burst": {
      description: "An explosive release of ki fueled by intense anger in the False Super Saiyan state.",
      type: "offensive"
    },
    "Pseudo Kamehameha": {
      description: "A version of the Kamehameha amplified by the False Super Saiyan's power.",
      type: "signature"
    },
    "Berserk Rush": {
      description: "A wild, unpredictable series of attacks reflecting the unstable nature of this form.",
      type: "offensive"
    }
  },
  transformations: {}, // This is an incomplete form with no further transformations
  imageUrl: "/images/false-super-saiyan-goku.jpg"
};

export const superSaiyanGoku: Character = {
  id: 10,
  name: "Super Saiyan Goku",
  race: "Saiyan",
  gender: "Male",
  description: "The legendary Super Saiyan transformation of Goku, first achieved through the intense emotion of losing his best friend Krillin. This form is characterized by golden, upright hair, teal eyes, and a dramatic increase in power.",
  biography: {
    height: "175 cm (5'9\")",
    weight: "62 kg (137 lbs)",
    status: "Transformation",
    affiliations: ["Z Fighters"],
    family: {
      father: "Bardock",
      mother: "Gine",
      spouse: "Chi-Chi",
      sons: "Gohan, Goten"
    }
  },
  powerLevel: {
    base: 500000, // 50x base Goku's power level
    transformations: {
      "Ascended Super Saiyan": 750000,
      "Ultra Super Saiyan": 850000,
      "Full Power Super Saiyan": 900000
    }
  },
  techniques: {
    "Angry Kamehameha": {
      description: "A more powerful version of the Kamehameha used in the Super Saiyan state, fueled by anger and determination.",
      type: "signature"
    },
    "Instant Kamehameha": {
      description: "A combination of Instant Transmission and Kamehameha, allowing Goku to teleport close to his opponent before firing.",
      type: "offensive"
    },
    "Super Energy Wave Volley": {
      description: "A rapid-fire energy wave attack that releases multiple ki blasts in quick succession.",
      type: "offensive"
    },
    "Meteor Smash": {
      description: "A powerful rushing attack that combines physical strikes with energy-based attacks.",
      type: "offensive"
    }
  },
  transformations: {
    "Ascended Super Saiyan": {
      description: "A more powerful version of Super Saiyan with increased muscle mass.",
      firstAppearance: {
        manga: "Chapter 388",
        anime: "Dragon Ball Z Episode 155"
      },
      multiplier: 1.5
    },
    "Ultra Super Saiyan": {
      description: "A further ascended form with extreme muscle mass but reduced speed.",
      firstAppearance: {
        manga: "Chapter 389",
        anime: "Dragon Ball Z Episode 156"
      },
      multiplier: 1.7
    },
    "Full Power Super Saiyan": {
      description: "The mastered state of Super Saiyan, allowing prolonged use without energy drain.",
      firstAppearance: {
        manga: "Chapter 390",
        anime: "Dragon Ball Z Episode 156"
      },
      multiplier: 1.8
    }
  },
  imageUrl: "/images/super-saiyan-goku.jpg"
};

export const characters = [
  goku, 
  greatApe, 
  kaiokenGoku, 
  kaiokenX2Goku, 
  kaiokenX3Goku, 
  kaiokenX4Goku, 
  kaiokenX10Goku,
  kaiokenX20Goku,
  falseSuperSaiyanGoku,
  superSaiyanGoku
];