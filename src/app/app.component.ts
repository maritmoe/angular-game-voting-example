import { Component } from '@angular/core';
import { GameComponent } from './game/game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Game Voting';
  lastVotedGame: string = '';
  lastVoted: boolean = false;

  games: string[] = [
    "Baldur's Gate 3",
    'Cyberpunk 2077',
    'Pacman',
    'Asteroids',
    'Space Invaders',
  ];

  capitalise(game: string) {
    game = game.toUpperCase();
    this.lastVotedGame = game;
  }
}
