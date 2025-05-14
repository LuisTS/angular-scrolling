import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CharactersService } from '../../services';
import { Observable } from 'rxjs';
import { Character } from '../../models/character.model';
import { CharacterCardComponent } from './components';

@Component({
  selector: 'app-main-container',
  standalone: true,
  imports: [AsyncPipe, CharacterCardComponent],
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainContainerComponent {
  private charactersService = inject(CharactersService);
  characters$: Observable<Character[]> = this.charactersService.getCharacters();
}
