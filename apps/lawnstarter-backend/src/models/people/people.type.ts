export interface PersonList {
  id: number;
  name: string;
}

export interface Person {
  id: number;
  name: string;
  details: {
    height: string;
    mass: string;
    hairColor: string;
    eyeColor: string;
    birthYear: string;
    gender: string;
  };
  movies: CharacterMovie[];
}

export interface CharacterMovie {
  id: number;
  name: string;
}
