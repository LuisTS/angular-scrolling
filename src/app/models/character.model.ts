import { Info } from "./api.model";

enum Gender {
  'MALE' = 'Male',
  'FEMALE' = 'Female',
  'GENDERLESS' = 'Genderless',
  'UNKNOWN' = 'unknown',
}

export interface LinkedElement {
  name: string;
  url: string;
}

export interface Origin extends LinkedElement {}
export interface Location extends LinkedElement {}

export interface CharactersResponse {
  info: Info;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: Gender;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
