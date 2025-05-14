import { CharactersResponse } from "../models/character.model";

export const CharacterAdapter = (characterResponse: CharactersResponse) => {
  return characterResponse.results;
}
