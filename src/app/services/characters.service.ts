import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Character, CharactersResponse } from '../models/character.model';
import { CharacterAdapter } from '../adapters';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private mainUrl = 'https://rickandmortyapi.com/api/';
  private charactersUrl = this.mainUrl + 'character';

  private http = inject(HttpClient);

  getCharacters(): Observable<Character[]> {
    return this.http
      .get<CharactersResponse>(this.charactersUrl)
      .pipe(map((result: CharactersResponse) => CharacterAdapter(result)));
  }

  getCharacterInformation(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }
}
