export interface MovieList {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  openingCrawl: string;
  characters: MovieCharacter[];
}

export interface MovieCharacter {
  id: number;
  name: string;
}
