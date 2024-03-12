import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  @Input('game') game: string = 'Rogue';
  @Output('voted') voted = new EventEmitter<string>();

  @Input('lastVoted') lastVoted: boolean = false;
}
